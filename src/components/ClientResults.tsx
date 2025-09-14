const ClientResults = () => {
  const results = [
    {
      type: "Торговый центр",
      savings: "65%",
      description: "налога"
    },
    {
      type: "Офисное здание", 
      savings: "50%",
      description: "налога"
    },
    {
      type: "Производственный комплекс",
      savings: "65%", 
      description: "налога"
    },
    {
      type: "Земельный участок",
      savings: "35%",
      description: "налога"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Результаты наших <span className="text-primary">клиентов</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {results.map((result, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="bg-primary/10 rounded-lg p-6">
                <div className="text-4xl font-bold text-primary mb-2">
                  -{result.savings}
                </div>
                <p className="text-muted-foreground">{result.description}</p>
              </div>
              <h3 className="font-semibold text-lg">{result.type}</h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-primary/5 rounded-lg p-8 max-w-md mx-auto">
            <div className="text-5xl font-bold text-primary mb-2">80 млн ₽</div>
            <p className="text-xl text-muted-foreground">сэкономлено за 5 лет</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientResults;