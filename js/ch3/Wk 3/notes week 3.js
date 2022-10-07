let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );

//   The input element includes some of the new attributes introduced in HTML5.

// The autofocus attribute give focus to this element when a page loads. It is the equivalent to putting the following line of JavaScript in main.js:

// Copy
// document.forms.hero.heroName.focus();
// The placeholder attribute will insert the value provided in the input field until the user enters some text. This can be useful to place hints about how to fill in the form.

// The maxlength attribute will limit the number of characters that can be entered in the field to the value given (in this case 32).

// There are many new attributes that can be employed to make forms more user-friendly. A good roundup of all the new form elements can be found in this article on the SitePoint website.