import { useEffect, useState } from 'react';

interface WeatherData {
  temp: number;
  description: string;
  city: string;
  country: string;
}

interface WeatherWidgetProps {
  city?: string;
}

export default function WeatherWidget({ city = "Moscow" }: WeatherWidgetProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        const API_KEY = '56f2e259f8fbd738afa81485b1ad5e06';
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
        );

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Город не найден');
          } else if (response.status === 401) {
            throw new Error('Ошибка API ключа');
          } else {
            throw new Error('Ошибка сервера');
          }
        }

        const data = await response.json();
        
        const weatherData: WeatherData = {
          temp: Math.round(data.main.temp),
          description: data.weather[0].description,
          city: data.name,
          country: data.sys.country
        };

        setWeather(weatherData);
      } catch (error) {
        if (error instanceof Error) {
          if (error.message.includes('Failed to fetch')) {
            setError('Нет интернет соединения');
          } else {
            setError(error.message);
          }
        } else {
          setError('Неизвестная ошибка');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <div style={{
          width: '30px',
          height: '30px',
          border: '3px solid #f3f3f3',
          borderTop: '3px solid #3498db',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto'
        }} />
        <p>Загрузка погоды...</p>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        padding: '20px',
        backgroundColor: '#ffebee',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <p style={{ color: '#c62828', marginBottom: '15px' }}>Ошибка: {error}</p>
        <button
          onClick={() => window.location.reload()}
          style={{
            padding: '8px 16px',
            backgroundColor: '#2196f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Обновить
        </button>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      maxWidth: '300px',
      margin: '0 auto'
    }}>
      <h3 style={{ marginTop: 0 }}>
        {weather.city}, {weather.country}
      </h3>
      <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#1976d2' }}>
        {weather.temp}°C
      </div>
      <p style={{ color: '#666', textTransform: 'capitalize' }}>
        {weather.description}
      </p>
    </div>
  );
}