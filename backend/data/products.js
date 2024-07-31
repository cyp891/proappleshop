const products = [
  {
    
    name: 'Roses & Berries Cake',
    image: '/images/Screenshot_1.jpg',
    description:
      'Τούρτα από σοκολάτα γάλακτος στη βαση παντεσπάνι σοκολάτας με επικάλυψη frosting βουτυρόκρεμας και αποξηραμένα roses & rasberries! (20 ατόμων)',
    brand: 'Apple',
    category: 'Special Cakes',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    
    name: 'Popcorn Caramel Drip Cake',
    image: '/images/Screenshot_2.jpg',
    description:
      'Τούρτα κέικ βανίλιας με ενδιάμεσες στρώσεις χειροποίητης sauce καραμέλας και frosting βουτυρόκρεμας με επικάλυψη popcorn, caramel drip & vanilla macaron (18-20 ατόμων).',
    brand: 'Apple',
    category: 'Special Cake',
    price: 85.50,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    
    name: '10 Ice Cream Cones σε διάφορες γεύσεις',
    image: '/images/Screenshot_3.jpg',
    description:
      'Ένα δροσερό mix από ice cream cones στις πιο υπέροχες γεύσεις, Σοκολάτα γάλακτος και επικάλυψη σοκολάτα bitter, πραλίνα Giandujia, σοκολάτα bitter και βατόμουρο, μπισκότο oreo, Stracciatella, cheesecake, κρέμα με επικάλυψη σοκολάτα γάλακτος, βανίλια Μαδαγασκάρης, snickers με πραλίνα-καραμέλα-φιστίκι, Red Velvet, Φιστίκι Αιγίνης, Sorbet Φράουλα, Sorbet Μάνγκο και Sorbet Λεμόνι.',
    brand: 'Cannon',
    category: 'ΠΑΓΩΤΑ',
    price: 20.00,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    
    name: 'Ice Cream Shots Variety: 9 σφηνάκια παγωτού',
    image: '/images/Screenshot_4.jpg',
    description:
      'Μια επιλογή από ξεχωριστές και δροσερές γεύσεις για να απολαύσετε το καλοκαίρι! Vegan vanilla, vegan chocolate, sorbet mango, sorbet strawberry, bitter chocolate, cookies, stracciatella, vanilla & brownies, kaimaki-vyssino, pavlova και φιστίκι.',
    brand: 'Sony',
    category: 'ΠΑΓΩΤΑ',
    price: 30.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    
    name: 'Vegan Chocolate Cake Τούρτα 0% sugar',
    image: '/images/Screenshot_5.jpg',
    description:
      'Vegan τούρτα από υψηλής ποιότητας σοκολάτα bitter, κρέμα καρύδας και βάση από vegan μπισκότο σοκολάτας και τριμμένο αρωματικό αμύγδαλο.The best vegan choice you can make!',
    brand: 'Logitech',
    category: 'Signature Desserts',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    
    name: 'Rosé by the Beach',
    image: '/images/Screenshot_6.jpg',
    description:'Μια Rosé πρόταση για τις καλοκαιρινές αποδράσεις. Ροζέ Προβηγκίας “Miraval” 0,75 l που γεννιέται στις ακτές της γαλλικής Προβηγκίας στο κάστρο των Angelina Jolie και Brad Pitt, οι οποίοι και το εμπνεύστηκαν. Αρωματικό κερί Good Eye Fresh με άρωμα λιβάνι, κόκκινο σταφύλι και νότες ελληνικών βοτάνων, φτιαγμένο από vegan και cruelty-free mineral wax',
    brand: 'Amazon',
    category: 'Dp and fresh',
    price: 129.99,
    countInStock: 20,
    rating: 4,
    numReviews: 12,
  },
  {
    
    name: 'Roses & Berries Cake',
    image: '/images/Screenshot_7.jpg',
    description:
      'Τούρτα από σοκολάτα γάλακτος στη βαση παντεσπάνι σοκολάτας με επικάλυψη frosting βουτυρόκρεμας και αποξηραμένα roses & rasberries! (20 ατόμων)',
    brand: 'Apple',
    category: 'Special Cakes',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    
    name: 'Popcorn Caramel Drip Cake',
    image: '/images/Screenshot_1.jpg',
    description:
      'Τούρτα κέικ βανίλιας με ενδιάμεσες στρώσεις χειροποίητης sauce καραμέλας και frosting βουτυρόκρεμας με επικάλυψη popcorn, caramel drip & vanilla macaron (18-20 ατόμων).',
    brand: 'Apple',
    category: 'Special Cake',
    price: 85.50,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    
    name: '10 Ice Cream Cones σε διάφορες γεύσεις',
    image: '/images/Screenshot_2.jpg',
    description:
      'Ένα δροσερό mix από ice cream cones στις πιο υπέροχες γεύσεις, Σοκολάτα γάλακτος και επικάλυψη σοκολάτα bitter, πραλίνα Giandujia, σοκολάτα bitter και βατόμουρο, μπισκότο oreo, Stracciatella, cheesecake, κρέμα με επικάλυψη σοκολάτα γάλακτος, βανίλια Μαδαγασκάρης, snickers με πραλίνα-καραμέλα-φιστίκι, Red Velvet, Φιστίκι Αιγίνης, Sorbet Φράουλα, Sorbet Μάνγκο και Sorbet Λεμόνι.',
    brand: 'Cannon',
    category: 'ΠΑΓΩΤΑ',
    price: 20.00,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    
    name: 'Ice Cream Shots Variety: 9 σφηνάκια παγωτού',
    image: '/images/Screenshot_3.jpg',
    description:
      'Μια επιλογή από ξεχωριστές και δροσερές γεύσεις για να απολαύσετε το καλοκαίρι! Vegan vanilla, vegan chocolate, sorbet mango, sorbet strawberry, bitter chocolate, cookies, stracciatella, vanilla & brownies, kaimaki-vyssino, pavlova και φιστίκι.',
    brand: 'Sony',
    category: 'ΠΑΓΩΤΑ',
    price: 30.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    
    name: 'Vegan Chocolate Cake Τούρτα 0% sugar',
    image: '/images/Screenshot_4.jpg',
    description:
      'Vegan τούρτα από υψηλής ποιότητας σοκολάτα bitter, κρέμα καρύδας και βάση από vegan μπισκότο σοκολάτας και τριμμένο αρωματικό αμύγδαλο.The best vegan choice you can make!',
    brand: 'Logitech',
    category: 'Signature Desserts',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    
    name: 'Rosé by the Beach',
    image: '/images/Screenshot_5.jpg',
    description:'Μια Rosé πρόταση για τις καλοκαιρινές αποδράσεις. Ροζέ Προβηγκίας “Miraval” 0,75 l που γεννιέται στις ακτές της γαλλικής Προβηγκίας στο κάστρο των Angelina Jolie και Brad Pitt, οι οποίοι και το εμπνεύστηκαν. Αρωματικό κερί Good Eye Fresh με άρωμα λιβάνι, κόκκινο σταφύλι και νότες ελληνικών βοτάνων, φτιαγμένο από vegan και cruelty-free mineral wax',
    brand: 'Amazon',
    category: 'Dp and fresh',
    price: 129.99,
    countInStock: 20,
    rating: 4,
    numReviews: 12,
  },
]

export default products
