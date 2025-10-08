import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const getAuthErrorMessage = (error: any): string => {
  const message = error?.message?.toLowerCase() || '';
  
  if (message.includes('invalid login') || message.includes('invalid password')) {
    return 'Неверный email или пароль';
  }
  if (message.includes('user already registered') || message.includes('already exists')) {
    return 'Пожалуйста, проверьте введенные данные';
  }
  if (message.includes('email not confirmed')) {
    return 'Пожалуйста, подтвердите email адрес';
  }
  if (message.includes('email rate limit')) {
    return 'Слишком много попыток. Попробуйте позже';
  }
  
  return 'Не удалось выполнить операцию. Попробуйте позже';
};

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/admin');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = isLogin 
        ? await signIn(email, password)
        : await signUp(email, password);

      if (error) {
        toast({
          title: 'Ошибка',
          description: getAuthErrorMessage(error),
          variant: 'destructive',
        });
      } else {
        toast({
          title: isLogin ? 'Вход выполнен' : 'Регистрация выполнена',
          description: isLogin 
            ? 'Добро пожаловать!' 
            : 'Проверьте email для подтверждения регистрации',
        });
        if (isLogin) {
          navigate('/admin');
        }
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Произошла непредвиденная ошибка',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            {isLogin ? 'Вход в систему' : 'Регистрация'}
          </CardTitle>
          <CardDescription className="text-center">
            {isLogin 
              ? 'Войдите в панель администратора' 
              : 'Создайте новый аккаунт'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Загрузка...' : isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </form>
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-primary hover:underline"
            >
              {isLogin ? 'Нет аккаунта? Зарегистрируйтесь' : 'Уже есть аккаунт? Войдите'}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
