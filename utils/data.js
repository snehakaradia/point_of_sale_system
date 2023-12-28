const items = [
    {
      name: "Basil Papriks Tomato Soup",
      price: 190,
      category: "Soups",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStI8__o-JJK4uM66Np_VhoLgLqv_Pd1frdcg&usqp=CAU",
    },
    {
      name: "Minestrone Soup",
      price: 205,
      category: "Soups",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpx7BcyvoTbWqDZtFT0hzeX1i8bXq7Wx_EPQ&usqp=CAU",
    },
    {
      name: "Roasted Corn Soup",
      price: 190,
      category: "Soups",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0bYkafaJ2KBvqkif-Va3plxS-qLEOFa_3w&usqp=CAU",
    },
    {
      name: "Sweet Corn Soup",
      price: 190,
      category: "Soups",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXVkcaL_Lb7OQsPERFHBlYUok9HFzcSB3OQA&usqp=CAU",
    },
    {
      name: "Chilly Paneer",
      price: 335,
      category: "Starter",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Rjmv9hv9SFhMRp8gy6sJZ-r0HpP29UYnUA&usqp=CAU",
    },
    {
      name: "Paneer Jafrani Tikka",
      price: 410,
      category: "Starter",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRawxB1nebxEMa6S9OWc-ZXA7BUy_my1v3uFA&usqp=CAU",
    },
    {
      name: "Paneer Malai Tikka",
      price: 335,
      category: "Starter",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWULg1P1NFW0WW41w9zXWgiucGn0VxUud5Gg&usqp=CAU",
    },
    {
      name: "Cigar Roll",
      price: 325,
      category: "Starter",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReegfnycKPlvzLJV9Fc0jI5WPjK2k_vTxx5w&usqp=CAU",
    },
    {
      name: "Veg Spring Roll",
      price: 305,
      category: "Starter",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWsK0fR2iVCthcVa9gWITl4H3OeEQCOpvK7w&usqp=CAU",
    },
    {
      name: "Methi Corn Tikki",
      price: 410,
      category: "Starter",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDVSYsJNazpPJjhSUPbh4tEhQQYufLoJDZhxwLdvM9Mp6GIPnpSdQHfpACUna3ZHZfok&usqp=CAU",
    },
    {
      name: "Veg Au Gratin",
      price: 375,
      category: "Continental",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqRM7c0B8y_a-BqRX6esQfB2VAlt0KXs4lWg&usqp=CAU",
    },
    {
      name: "Spaghetti & Veg Balls",
      price: 335,
      category: "Continental",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7fYlYSbYEzkyy1WDKBPaVZf98VFPWg2oow&usqp=CAU",
    },
    {
      name: "Garlic Bread",
      price: 205,
      category: "Continental",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGHAzIBQyQpkc7Y22Mjud-PCP7qpumcZ8sJg&usqp=CAU",
    },
    {
      name: "Choice of Pasta(Red,White)",
      price: 335,
      category: "Continental",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-WDNNnY4IPvjK5y-bp4ipdo5MwxQKh6QZ2w&usqp=CAU",
    },
    {
      name: "Paneer Makhani",
      price: 405,
      category: "Indian",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRk9lU0yL_eiaHCa1s3FO_gp0Wzgf6SxvFWw&usqp=CAU",
    },
    {
      name: "Paneer Angara",
      price: 405,
      category: "Indian",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqddWqXAlZdRm5LftuD7TudJgIkNdbzYX9A&usqp=CAU",
    },
    {
      name: "Kaju Kumbh",
      price: 450,
      category: "Indian",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-MDvJXsLEznPTTImN9GWnVLrzNOT-c-FxA&usqp=CAU",
    },
    {
      name: "Ras Bhare Kofte",
      price: 415,
      category: "Indian",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUmBNbCjetGJdv9j6Yw86oKVPHt4lKWxJL6Q&usqp=CAU",
    },
    {
      name: "Makhana Kaju Curry",
      price: 425,
      category: "Indian",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxen0W05M3XarpPGeP-vfVpNnuvBNoq4f7gw&usqp=CAU",
    },
    {
      name: "Shahi Malai Kofta",
      price: 425,
      category: "Indian",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQH9QBNuzcKTjyLg5K7phLpDCqwSrToxyg4w&usqp=CAU",
    },
    {
      name: "Seekh Kabab Masala",
      price: 425,
      category: "Indian",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcheWff4NUCYVu99nBx-ao3vyaC3mhoqmOoA&usqp=CAU",
    },
    {
      name: "Dal Tadka",
      price: 290,
      category: "Indian",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKGW2X_HCt72WmQ1SAxgPa2vJOAcrktXte3Q&usqp=CAU",
    },
    {
      name: "Tawa Sabji",
      price: 290,
      category: "Indian",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfy-iZkh76ZQvyoRTVYgQALP6F8hTQG3Jwfg&usqp=CAU",
    },
    {
      name: "Butter Naan",
      price: 70,
      category: "Roti",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMk1g5ij09rtW98US_8QcT6y3xWQyFkcgdHQ&usqp=CAU",
    },
    {
      name: "Garlic Naan",
      price: 90,
      category: "Roti",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGrT6jI0cHwSAo1i6Qi3FUW7hbYmfTTfCX1A&usqp=CAU",
    },
    {
      name: "Tandoori Roti",
      price: 45,
      category: "Roti",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzqyOwqtepgYkpgo3IGI9AJ0FLgRlSJzADQ&usqp=CAU",
    },
    {
      name: "Jeera Garlic Pulao",
      price: 260,
      category: "Rice",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtG_c-T4WcOGsNI7iIPyTnUTyN_VLFeL_how&usqp=CAU",
    },
    {
      name: "Soya Dum Biryani",
      price: 335,
      category: "Rice",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-S2-fPMW-wkheTqWWHAReVcl2hZ6LOYo1Gw&usqp=CAU",
    },
    {
      name: "Gulab Jamun",
      price: 250,
      category: "Dessert",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSaNoqJ-FsRZ35KdTV4EZIdWAgP8N5GZorsQ&usqp=CAU",
    },
    {
      name: "Ras Malai",
      price: 300,
      category: "Dessert",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-rcUuhG2SmRuzpv-HaZ3m0Y_kqhr9ZNJMTQ&usqp=CAU",
    },
    {
      name: "Banana Caramel Cream",
      price: 250,
      category: "Dessert",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXl9APebxxaj3I3S2P_cvvFskqHxOSNqKMlg&usqp=CAU",
    },
    {
      name: "Oreo Dessert Pot",
      price: 315,
      category: "Dessert",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJZD0c9gRDu48XoYFmwK6xh2USYKuBRi2-Q&usqp=CAU",
    },
    {
      name: "Ice-Cream",
      price: 215,
      category: "Dessert",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWGyI3iEdkFtGuXixO6AlbZbGIN7NP3ngKQ&usqp=CAU",
    },
  ];
  module.exports = items;
  