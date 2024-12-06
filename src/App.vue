<template>
  <div id="app">

    <header>
      <!-- Website name / Welcome message -->
      <h1>{{ sitename }}</h1>
    </header>

    <!-- <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script> -->
    <link href='https://fonts.googleapis.com/css?family=Fraunces' rel='stylesheet'>
    <title>Coursework for Full Stack</title>

    <!--
      <header>
        Header using vue.js
        <h1 v-text="Coursework1Website"></h1>
      </header>
    -->
  </div>

  <main>

    <!--Cart button-->
    <!-- If statement, if n of items in cart (cart length) are 0 then do nothing otherwise turn cart on
    toggleCart=Toggles cart visibility function when clicked -->
    <a id="cart"
    @click="toggleCart" :class="{ disabled: cart.length < 1 }">
      <img alt="Cart" id="carticon" src="../public/images/cart-icon.png">
      <!--Displays number of items-->
      {{ NOfItemsInCart }}
      <!--Displays view cart if length of variables within cart is more than 0-->
      {{ cart.length > 0 ? "View your cart" : "No items in cart" }}
    </a>



    <!-- Cart Page -->

    <!--If statement, if cart visible = true then show div-->
    <div v-if="cartVisible">

      <h2>Shopping Cart</h2>
      <!-- Display lessons -->
      <ul>
        <li v-for="(lesson, index) in cart" :key="index">
          {{ lesson.subject }}
          <button @click="removeFromCart(index, lesson)">Remove</button>
        </li>
      </ul>

      <!-- Checkout/cart section which will be shown after cart is clicked -->
      <h2>Welcome to Checkout</h2>

      <!--Binding name with v-model-->
      <p>
        First name:
        <input type="text" v-model="order.firstname" @input="validateName" placeholder="Enter your name" />
      </p>
      <!--V-model- Gets sent to order.name, binding element with order.firstname-->

      <p>
        Surname:
        <input type="text" v-model="order.surname" @input="validateName" placeholder="Enter your name" />

        <!-- Show error if name is invalid -->
        <span v-if="order.firstname && !isNameValid" style="color: red;">
          Name must contain letters only.
        </span>
      </p>

      <p>
        Phone Number:
        <input type="text" v-model="order.phonenumber" @input="validatePhone" placeholder="Enter your phone number" />


        <!-- Show error if phone number is invalid -->
        <span v-if="order.phonenumber && !isPhoneValid" style="color: red;">
          Phone number must contain numbers only.
        </span>
      </p>

      <p>Email:</p>
      <input type="text" v-model="order.email">

      <!--    Select button using v-model
      <p>Select region</p>
      <select v-model="order.region">
        <option disabled>Select Region</option>
        <option v-bind:value="order.region">Europe</option>
        <option v-bind:value="order.region">USA</option>
        <option v-bind:value="order.region">Asia</option>
        <option v-bind:value="order.region">Middle East</option>
        <option v-bind:value="order.region">Africa</option>
      </select>-->

      <p>Zip/Postcode:</p>
      <input type="text" v-model="order.postcode">

      <p>Address:</p>
      <input type="text" v-model="order.address">
      
  <!-- Read order information back to user-->
      <h2> Order Information </h2>
      <p>Name: {{ order.firstname }}</p>
      <p>Surname: {{ order.surname }}</p>
      <p>Phone number: {{ order.phonenumber }}</p>
      <p>Email: {{ order.email }}</p>
    <!-- <p>Region: {{ order.region }}</p>-->
      <p>Zip/Postcode: {{ order.postcode }}</p>
      <p>Deliver to address: {{ order.address }}</p>
      {{ order.lesson }}

      <!--Button for checking out-->
      <button :disabled="!isFormValid" v-on:click="submitCheckoutButton">Place Order</button>


      <!-- Button is disabled by default until valid inputs are provided -->
      <!--<button :disabled="!isFormValid" @click="submitCheckoutButton">
        Checkout
      </button> -->
    </div>

    <!-- Shows the cart page if cartVisible is true -->
    <!-- v-else shows the lesson list if otherwise -->
    <div v-else>
      <!-- Lesson page / section -->

      <!-- Search functionality via to do list workshop-->
      <div id="SearchFunctionality">
        <input type="text" id="searchBar">
        <button id="searchButton">Search lessons</button>
      </div>

      <!-- Sorting functionality -->
      <div id="sortOptions">
        <label for="sortBy">Sort by:</label>
        <select v-model="sortBy">
          <option value="subject">Subject</option>
          <option value="location">Location</option>
          <option value="price">Price</option>
          <option value="availability">Availability</option>
        </select>

        <label for="sortOrder">Order:</label>
        <select v-model="sortOrder">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <!-- Displaying all lessons using v-for -->
      <div id="Lessons">
        <div id="lessonItems">
          <!-- Using v-for to loop through sorted lessons array -->
          <!-- For each lesson in the array create a new div using the id as the key -->
          <div v-for="lesson in sortedLessons" :key="lesson.id" class="lesson-item">

            <!-- Displaying lesson properties from lesson array -->
            <h3>{{ lesson.subject }}</h3>
            <p>Location: {{ lesson.location }}</p>
            <p>Price: £{{ lesson.price }} per hour</p>
            <p class="lessonDescription">{{ lesson.description }}</p>
            <p>Availability: {{ lesson.availability }} spaces</p>
            <!-- To display individual image from image property using v-bind:src -->
            <img v-bind:src="lesson.image" alt="Lesson Image" class="lesson-image">
            <br>

            <!--Button to add to cart with Vue event handler, using id 
           When availability is less than or equal to 0 disable button.
         Using ternary operator (IF statement TRUE(?) option 1 ELSE(:) option 2)
             If lesson availability is less than 1, then show "add to cart" for button, else show "no lessons available"-->
            <button class="addToCartButton" @click="addToCart(lesson)" :disabled="lesson.availability < 1">
              {{ lesson.availability > 0 ? "Add to Cart" : "No spaces available" }}
            </button>

          </div>
        </div>
      </div>
    </div> <!--End of v-else display lessons div section-->

  </main>

</template>
<script>
// Vue js instance
export default {
  name: 'App',
  components: {
  },
  // data properties
  data() {
    return {
      sitename: "Extra Lessons Store",
      lessons: [], // empty array of lessons
      cartVisible: false,  // Control cart visibility, set to false by default
      cart: [],
      lessonCategories: ['English', 'Maths', 'Science', 'Geography'],
      order: { // order details, by default setting it to empty string
        firstname: "",
        surname: "",
        phonenumber: "",
        email: "",
        postcode: "",
        address: "",
        lessonid: ""
      },
      lesson: {
        lessonId: "",
        subject: "",
        location: "",
        price: 0,
        description: "",
        availability: 5,
        image: ""
      },
      // Set to false by default so regex can be complicated before button gets enabled
      isNameValid: false,
      isPhoneValid: false,
      sortBy: 'subject',  // Setting the default sorting by 'subject'
      // Stores the current attribute lessons are sorted by - Defaults to subject
      sortOrder: 'asc'   // Setting the default order to ascending
    };
  },

  methods: {
    // Validate that the name contains only letters
    validateName() {
      const nameRegex = /^[A-Za-z\s]+$/;
      this.isNameValid = nameRegex.test(this.order.firstname);
      this.isNameValid = nameRegex.test(this.order.surname);
    },
    // Validate that the phone number contains only numbers
    validatePhone() {
      const phoneRegex = /^[0-9]+$/;
      this.isPhoneValid = phoneRegex.test(this.order.phonenumber);
    },
    /**
    submitCheckoutButton() {
      alert("Purchase successful, thank you for shopping with us")
      this.cart = []; // Clear the cart after submission
      this.order = {
        firstname: "", surname: "", phonenumber: "",
        email: "",
        postcode: "",
        address: "",
        lessonid: ""
      };// Reset order fields
    },*/
    // Function to push the lesson into cart
    // define which lesson
    addToCart(lesson) {
      if (lesson.availability > 0) {
        // Add lesson to cart by copying lesson object
        this.cart.push({ ...lesson }); // Spread the lesson object to create a copy in the cart
        // Decrement availability by 1 both in the lessons list and cart
        lesson.availability--;

        // Return successful message and amount left
        alert(`Successfully added lesson to cart. Remaining left: ${lesson.availability}`);
      } else {
        alert("No lessons available");
      }
    },
    // Dictates cart accessibility, when cart quantity is under 0,
    // stops ability to access cart section div

    // When triggered (cartVisible is true) if statement will show the cart div
    toggleCart() {
      if (this.NOfItemsInCart > 0) { // If length of cart is greater than 0
      // When triggered, changes boolean property cartVisibile to not visible
      this.cartVisible = !this.cartVisible; // cartVisible=either shows cart / checkout section div or hides it
    } else {
      alert('No items in cart to view. Please add to cart before you continue'); // Else give error message
    }
    },
    // remove lesson from cart via position in the cart
    removeFromCart(index, lesson) {
      this.cart.splice(index, 1); // Splice removes lesson based on position
      // 1 is delete count, specifying how many to remove

      // To increment spaces back for the lesson:
      // Find the lesson in the original lessons list
      const originalLesson = this.lessons.find(l => l.id === lesson.id);
      if (originalLesson) {
        originalLesson.availability++; // Restore the availability
      }
    },
    submitCheckoutButton() {

       // Define regular expressions
  const nameRegex = /^[A-Za-z]+$/; // Letters only
  const phoneRegex = /^[0-9]+$/;  // Numbers only

  // Validate first name
  if (!nameRegex.test(this.order.firstname)) {
    alert("Name must contain letters only.");
    return;
  }

   // Validate surname fields
   if (!nameRegex.test(this.order.surname)) {
    alert("Name must contain letters only.");
    return;
  }

  // Validate phone number
  if (!phoneRegex.test(this.order.phonenumber)) {
    alert("Phone must contain numbers only.");
    return;
  }

  // Validate the form fields
  if (!this.order.firstname || !this.order.surname || !this.order.phonenumber || !this.order.email || !this.order.address) {
    alert("Please fill out all required fields.");
    return;
  }

  // Prepare the payload for the backend
  const payload = {
    firstname: this.order.firstname,
    surname: this.order.surname,
    phonenumber: this.order.phonenumber,
    email: this.order.email,
    postcode: this.order.postcode,
    address: this.order.address,
    lessonIDs: this.cart.map(item => item._id || item.lessonId), // Send lesson IDs only
  };

  // Send the order to the backend
  fetch("https://lessons-ecommerce-website-rest-api3.onrender.com/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload), // Convert the payload to JSON
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to submit order. Please try again.");
      }
      return response.json();
    })
    .then((data) => {
      alert("Order placed successfully!");
      console.log("Order response:", data);

      // Clear the cart and reset the order form
      this.cart = [];
      this.order = {
        firstname: "",
        surname: "",
        phonenumber: "",
        email: "",
        postcode: "",
        address: "",
        lessonid: "",
      };
    })
    .catch((error) => {
      console.error("Error submitting order:", error);
      alert("There was a problem placing your order. Please try again.");
    });
}


    /**
    submitCheckoutButton2() {
  // Basic validation
  if (!this.order.firstname || !this.order.surname || !this.order.phonenumber || !this.order.email || !this.order.address) {
    alert("All fields are required.");
    return;
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(this.order.phonenumber)) {
    alert("Phone number must be 10 digits.");
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(this.order.email)) {
    alert("Invalid email format.");
    return;
  }

  // Prepare the payload
  const payload = {
    firstname: this.order.firstname,
    surname: this.order.surname,
    phonenumber: this.order.phonenumber,
    email: this.order.email,
    postcode: this.order.postcode,
    address: this.order.address,
    lessonIDs: this.cart.map(item => item._id || item.lessonId), // Handle both _id and lessonId
    numberOfSpaces: this.cart.length,
  };

  // Debugging payload
  console.log("Submitting order with payload:", payload);

  // Send data to the backend
  fetch("https://lessons-ecommerce-website-rest-api3.onrender.com/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Order submission response:", data);
      alert("Order submitted successfully!");

      // Clear the cart and reset the form
      this.cart = [];
      this.order = {
        firstname: "",
        surname: "",
        phonenumber: "",
        email: "",
        postcode: "",
        address: "",
        lessonid: "",
      };
    })
    .catch((error) => {
      console.error("Error submitting order:", error);
      alert("Failed to submit the order. Please try again later.");
    });
}
*/

/**
    // Function to handle form submission
    submitCheckoutButton2() {
      // Validation for number, email and required fields using Regex
      if (!this.order.firstname || !this.order.surname || !this.order.phonenumber || !this.order.email || !this.order.address) {
        alert("All fields are required.");
        return;
      }

 const nameRegex = /^[A-Za-z\s]+$/;
      {
      this.isNameValid = nameRegex.test(this.order.firstname);
      //this.isNameValid = nameRegex.test(this.order.surname);
    }

      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(this.order.phonenumber)) {
        alert("Phone number must be 10 digits.");
        return;
      }

      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailRegex.test(this.order.email)) {
        alert("Invalid email format.");
        return;
      }

      // Send data to the backend
      fetch("https://lessons-ecommerce-website-rest-api3.onrender.com/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: this.order.firstname,
          surname: this.order.surname,
          phonenumber: this.order.phonenumber,
          email: this.order.email,
         // region: this.order.region,
          postcode: this.order.postcode,
          address: this.order.address,
          lessonIDs: this.cart.map(item => item.lessonId), // Only the lesson IDs from cart
          numberOfSpaces: this.cart.length, // Spaces = number of items in cart
        }),
      })
        .then((response) => response.json())
        .then(() => alert(`Order submitted!`))
    }*/
  },
    computed: {
      // Enable the button only when both fields are valid
      isFormValid() {
        const nameRegex = /^[A-Za-z]+$/; // Letters only
    const phoneRegex = /^[0-9]+$/;  // Numbers only
    return nameRegex.test(this.order.firstname) && nameRegex.test(this.order.surname) && phoneRegex.test(this.order.phonenumber);

        //return this.isNameValid && this.isPhoneValid;
      },
      // function to show number of items in cart
      // by returning cart length (number of product ids)
      NOfItemsInCart() {
        return this.cart.length;
      },
      //total elements available in inventory are more than elements added to cart 
      isAvailable() {
        // when total number of available elements have been added, button will be disabled
        //for each item
        return this.lessons.availability > this.NOfItemsInCart;
        // if (this.cart.length) isEqual (this.lessons.availability)
      }, //fetch for json, fetch will call our server
      // Sorting functionality
      sortedLessons() {
        // Make a copy of the lessons to avoid changing the original array
        const lessonsCopy = [...this.lessons]; // making a copy via spread operator

        // Sort the lessons based on the selected criteria (sortBy) and order (sortOrder)
        lessonsCopy.sort((a, b) => {
          // If statement based on what user picked, decide how to compare the lessons based on selected sort criteria
          if (this.sortBy === 'price') {
            return a.price - b.price;  // Sort by price (ascending)
          } else if (this.sortBy === 'availability') {
            return a.availability - b.availability;  // Sort by availability (ascending)
          } else if (this.sortBy === 'subject' || this.sortBy === 'location') {
            // Sort alphabetically for subject or location
            return a[this.sortBy].localeCompare(b[this.sortBy]);
          }
        });

        // If descending order is selected, reverse the order
        if (this.sortOrder === 'desc') {
          lessonsCopy.reverse();
        }

        // Return the sorted lessons array
        return lessonsCopy;
      }
    },
    created: function () {
      const that = this;
      // Fetch API call, retrieves response from Render to present to front end
      fetch("https://lessons-ecommerce-website-rest-api3.onrender.com/lessons").then(
        function (response) {
          response.json().then(
            function (json) {
              alert("Successfully connected to server");
              console.log(json); // To show data in the console
              that.lessons = json; // assign lessons to response json data
            }
          )
        }
      )
    },
    // Disables cart if it has a length (1 lesson id) of 1
    isCartNotEmpty() {
      return this.cart.length > 0;
    }
  }
</script>

<style>
.lessonDescription {
  font-family: 'Times New Roman', Times, serif;
  font-size: 20x;
}

/*Lesson header*/
h1 {
  padding: 20px;
  margin-bottom: -20px;
}

/*Background and text styling*/
#app {
  background-color: beige;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'Fraunces';
  font-size: 22px;
  /**font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;*/
}

p {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

/*Entire lessons section div*/
#Lessons {
  border: solid 2px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  align-items: center;
  border-color: darkgrey;
}

/* Styling of each individual image displayed in div */
.lesson-image {
  height: 50px;
  width: 50px;
  padding-bottom: 15px;
}

/*Each individual div of the lesson items*/
#Lesson1,
#Lesson2,
#Lesson3 {
  border: solid 2px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 70px;
  padding-bottom: 20px;
  flex: content;
  align-items: flex-start;
  border-style: inset;
  padding-right: 80%;
  padding-left: 20px;
}

/*When hovering over lesson item, change background*/
#Lesson1:hover {
  background-image: url(../public/images/geography.jpg);

  color: white;
}

#Lesson2:hover {
  background-image: url(../public/images/english.jpg);
  color: white;
}

#Lesson3:hover {
  background-image: url(../public/images/maths.jpg);
  color: white;
}

/*Search bar input form*/
#searchBar {
  color: black;
  border-radius: 30px;
  border: 1px solid;
  padding: 10px;
  width: 250px;
  margin-left: 16%;
  align-items: center;
  justify-content: center;
}

/*Buttons styling*/
#searchButton,
.addToCartButton {
  border-radius: 30px;
  border: 1px solid;
  padding: 10px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  text-decoration-color: azure;

  appearance: none;
  background-color: transparent;
  border: 1px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  height: 50px;
  width: 190px;
  outline: none;
  padding: 12px 10px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
  margin-left: 15px;
}

#searchButton:disabled,
.addToCartButton:disabled {
  pointer-events: none;
}

/*Change style and background colour when hovering*/
#searchButton:hover,
.addToCartButton:hover {
  color: #fff;
  background-color: #1A1A1A;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.button-28:active {
  box-shadow: none;
  transform: translateY(0);
}

/*Cart icon*/
#carticon {
  margin-left: 80%;
  margin-top: 10px;
  margin-bottom: -30px;
}

/*Styling of add to cart button*/
.addToCartButton {
  border-radius: 15px;
  border: solid 1px;
}
</style>