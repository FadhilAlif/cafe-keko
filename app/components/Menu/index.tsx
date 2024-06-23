// components/Menu.tsx
import React from "react";
import CardMenu from "../CardMenu";

const Menu = () => {
  return (
    <section className="max-container padding-container">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CardMenu
            imageSrc="/image1.jpg"
            title="Espresso"
            description="A strong and bold coffee, perfect for a quick boost."
            price="$3.00"
          />
          <CardMenu
            imageSrc="/image2.jpg"
            title="Cappuccino"
            description="A perfect balance of espresso, steamed milk, and foam."
            price="$4.50"
          />
          <CardMenu
            imageSrc="/image3.jpg"
            title="Latte"
            description="Smooth and creamy, made with the finest espresso and milk."
            price="$4.00"
          />
        </div>
      </div>
    </section>
  );
};

export default Menu;
