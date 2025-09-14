import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData);
  };

  const targetAudience = [
    {
      icon: "BookOpen",
      title: "Для тех кому нравится и не нравится читать",
      description: "Открываем новые грани литературы через театр"
    },
    {
      icon: "Compass",
      title: "Для тех кому интересно исследовать возможности",
      description: "Расширяем кругозор через творческие эксперименты"
    },
    {
      icon: "Users",
      title: "Для тех, кто хочет знакомиться с новыми людьми",
      description: "Сотворчество и поддержка связей с теми, кто живёт далеко"
    },
    {
      icon: "Mic",
      title: "Для тех, кто хочет управлять своим голосом",
      description: "Учимся не бояться выступать на публике"
    },
    {
      icon: "MessageSquare",
      title: "Для тех кому есть что сказать",
      description: "Помогаем сформулировать мысли и идеи"
    },
    {
      icon: "Palette",
      title: "Для тех кому интересно придавать форму содержанию",
      description: "Экспериментируем и проявляемся через творчество"
    }
  ];

  const activities = [
    {
      icon: "Book",
      title: "Литературный клуб",
      description: "Углублённая работа с литературными произведениями"
    },
    {
      icon: "Clock",
      title: "Нескучные лекции по истории",
      description: "Изучаем контекст и эпохи через живое повествование"
    },
    {
      icon: "Music",
      title: "Работа с голосом и дикцией",
      description: "Развиваем речевые навыки и уверенность"
    },
    {
      icon: "Search",
      title: "Исследование себя",
      description: "Поиск своего видения, а не правильного ответа"
    },
    {
      icon: "Heart",
      title: "Работа с телесными зажимами",
      description: "Освобождаем тело для свободного самовыражения"
    },
    {
      icon: "Shield",
      title: "Безопасная среда",
      description: "Принимающая атмосфера для творческих экспериментов"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: 'url("/img/8e830cfa-af16-481c-8aee-6dc3a2218268.jpg")'
          }}
        ></div>
        
        {/* Surreal Elements */}
        <div className="absolute inset-0 opacity-20">
          {/* Dotted connecting lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="currentColor" className="text-accent" opacity="0.3"/>
              </pattern>
            </defs>
            <path d="M 100 200 Q 300 100 500 300 T 800 200" stroke="currentColor" strokeWidth="2" 
                  strokeDasharray="10,5" fill="none" className="text-accent" opacity="0.6"/>
            <path d="M 200 600 Q 400 400 600 700 T 900 600" stroke="currentColor" strokeWidth="2" 
                  strokeDasharray="15,8" fill="none" className="text-primary" opacity="0.5"/>
          </svg>
          
          {/* Floating elements */}
          <div className="absolute top-20 left-20 w-24 h-24 opacity-30 animate-pulse">
            <Icon name="Cloud" size={48} className="text-accent" />
          </div>
          <div className="absolute top-1/3 right-32 w-16 h-16 opacity-40 animate-bounce">
            <Icon name="Star" size={32} className="text-primary" />
          </div>
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 opacity-35">
            <Icon name="Music" size={40} className="text-accent rotate-12" />
          </div>
        </div>
        
        <div className="container mx-auto px-6 text-center z-10">
          <div className="animate-fade-in">
            <div className="mb-8">
              <Icon name="Drama" size={80} className="mx-auto mb-6 text-accent" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight relative">
              <span className="relative inline-block">
                ИСТОРИКО-
                <div className="absolute -top-8 -right-12 opacity-60">
                  <Icon name="Feather" size={32} className="text-accent rotate-45" />
                </div>
              </span>
              <br />
              <span className="text-accent relative">
                ЛИТЕРАТУРНЫЙ
                <svg className="absolute -bottom-2 left-0 w-full h-2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 1 Q 150 0 300 1 T 600 1" stroke="currentColor" strokeWidth="3" 
                        strokeDasharray="8,4" fill="none" className="text-primary" opacity="0.7"/>
                </svg>
              </span>
              <br />
              <span className="relative">
                ТЕАТР 13+
                <div className="absolute -bottom-6 -left-8 opacity-50">
                  <Icon name="Drama" size={28} className="text-primary" />
                </div>
              </span>
            </h1>
            
            <div className="relative mb-8">
              <p className="text-xl md:text-2xl text-accent mb-8 max-w-3xl mx-auto leading-relaxed relative">
                Авторский курс в Барселоне, где творчество размывает границу с образованием
                <div className="absolute -right-16 top-0 opacity-40">
                  <Icon name="Palette" size={24} className="text-primary animate-pulse" />
                </div>
              </p>
              
              {/* Decorative text elements */}
              <div className="absolute -left-32 top-8 text-sm text-accent opacity-60 rotate-12 hidden lg:block">
                ✨ Фантазийная анархия
              </div>
              <div className="absolute -right-40 -top-4 text-sm text-primary opacity-50 -rotate-6 hidden lg:block">
                🎭 Творческие эксперименты
              </div>
            </div>
            
            <div className="relative inline-block">
              <Button 
                size="lg" 
                className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50 relative z-10"
              >
                ЗАПИСАТЬСЯ НА КУРС
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              
              {/* Decorative elements around button */}
              <div className="absolute -top-4 -left-8 opacity-30">
                <Icon name="Sparkles" size={20} className="text-accent animate-pulse" />
              </div>
              <div className="absolute -bottom-4 -right-6 opacity-40">
                <Icon name="Heart" size={16} className="text-primary animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
              ДЛЯ КОГО ЭТОТ КУРС
            </h2>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-30">
              <Icon name="Users" size={32} className="text-accent" />
            </div>
            
            <svg className="absolute top-16 left-1/2 transform -translate-x-1/2 w-32 h-2" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 1 Q 64 0 128 1" stroke="currentColor" strokeWidth="2" 
                    strokeDasharray="6,3" fill="none" className="text-primary" opacity="0.6"/>
            </svg>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetAudience.map((item, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:bg-accent/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 relative overflow-hidden group"
              >
                <CardHeader className="text-center">
                  <div className="relative">
                    <Icon name={item.icon} size={48} className="mx-auto mb-4 text-primary group-hover:text-accent transition-colors duration-300" />
                    
                    {/* Floating decorative dot */}
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                  </div>
                  <CardTitle className="text-foreground text-lg leading-tight group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              ПРОГРАММА КУРСА
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Авторский курс сочетает в себе литературный клуб, занятия по истории, театральную мастерскую. 
              В конце курса мы с ребятами представим театральную читку, на которой будем очень рады видеть родителей и друзей.
            </p>
            <div className="bg-gradient-to-r from-accent to-primary p-6 rounded-lg text-black">
              <p className="text-lg font-semibold">
                📍 Исторический кружок • Театральная лаборатория • Очные занятия в Барселоне
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card 
                key={index}
                className="bg-slate-700/30 border-slate-600 hover:bg-slate-700/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <Icon 
                    name={activity.icon} 
                    size={40} 
                    className="text-primary mb-4 group-hover:text-accent transition-colors duration-300" 
                  />
                  <CardTitle className="text-white text-xl">
                    {activity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300">
                    {activity.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ЗАПИСАТЬСЯ НА КУРС
            </h2>
            <p className="text-xl text-slate-300">
              Заполните форму, и мы свяжемся с вами для обсуждения деталей
            </p>
          </div>

          <Card className="bg-slate-700/50 border-slate-600 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-white text-lg">
                      Имя ребёнка *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-600/50 border-slate-500 text-white placeholder:text-slate-400 mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="age" className="text-white text-lg">
                      Возраст *
                    </Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      min="13"
                      max="18"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-600/50 border-slate-500 text-white placeholder:text-slate-400 mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white text-lg">
                    Телефон родителей *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-slate-600/50 border-slate-500 text-white placeholder:text-slate-400 mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white text-lg">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-slate-600/50 border-slate-500 text-white placeholder:text-slate-400 mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white text-lg">
                    Дополнительная информация
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-slate-600/50 border-slate-500 text-white placeholder:text-slate-400 mt-2 resize-none"
                    placeholder="Расскажите о интересах ребёнка, опыте участия в театре или других важных деталях..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg py-6 bg-accent hover:bg-accent/90 text-black font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-accent/50"
                >
                  ОТПРАВИТЬ ЗАЯВКУ
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">КОНТАКТЫ</h3>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-center justify-center">
                <Icon name="MapPin" size={20} className="mr-2 text-accent" />
                <span>Барселона, Испания</span>
              </div>
              <div className="flex items-center justify-center">
                <Icon name="Phone" size={20} className="mr-2 text-accent" />
                <span>+34 123 456 789</span>
              </div>
              <div className="flex items-center justify-center">
                <Icon name="Mail" size={20} className="mr-2 text-accent" />
                <span>info@teatr-bcn.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <Icon name="Drama" size={48} className="mx-auto text-accent mb-4" />
            <h3 className="text-2xl font-bold text-white">
              Историко-литературный театр 13+
            </h3>
          </div>
          <p className="text-slate-400">
            © 2024 Творческое пространство в Барселоне. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;