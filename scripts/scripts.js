'use strict'
//slider
let data = [
  {
    id: 1,
    ImageUrl: 'https://img.freepik.com/premium-photo/adjarian-kha…ional-bread-product-stepantsminda_599763-5175.jpg',
    title: 'Khachapuri'
  },
  {
    id: 2,
    ImageUrl: '	https://img.freepik.com/premium-photo/gourmet-appe…zza-with-dried-horse-meat-arugula_219193-9051.jpg',
    title: 'Pizza margherita'
  },
  {
    id: 3,
    ImageUrl: 'https://img.freepik.com/premium-photo/dinner-conce…h-two-glasses-white-wine-baked-fish_152625-63.jpg',
    title: 'Fish'
  },
  {
    id: 4,
    ImageUrl: '	https://img.freepik.com/premium-photo/fried-appeti…llet-with-asparagus-dark-background_1220-7087.jpg',
    title: 'Tasty chicken breast'
  },
]

const arrow_left = document.getElementById('arrow-left')
const arrow_right = document.getElementById('arrow-right')
const slider_content = document.getElementById('slider-content')
let slider_index = 0

function create_div() {
  let div_element = document.createElement('div')
  return div_element

}
function create_img(item) {
  let tag_img = document.createElement('img')
  tag_img.src = item.ImageUrl
  return tag_img
}
function create_title(item) {
  let tag_title = document.createElement('h2')
  tag_title.innerText = item.title
  return tag_title

}



function slide() {
  slider_content.innerHTML = ' '
  let slide_div = create_div()
  let slide_img = create_img(data[slider_index])
  let slide_title = create_title(data[slider_index])

  slide_div.appendChild(slide_img)
  slide_div.appendChild(slide_title)
  slider_content.appendChild(slide_div)

  console.log(slide_div);
}
slide()

function arrow_left_click() {
  if (slider_index == 0) {
    slider_index = data.length - 1;
    slide();
    return;
  }
  slider_index--;
  slide();
}

function arrow_right_click() {
  if (slider_index == data.length - 1) {
    slider_index = 0;
    slide();
    return;
  }
  slider_index++;
  slide();
}
arrow_left.addEventListener("click", arrow_left_click);
arrow_right.addEventListener("click", arrow_right_click);

setInterval(() => {
  arrow_right_click();
}, 2000);

//   accordion
let accordionContainer = document.querySelectorAll('.ac_container')

for (let item of accordionContainer) {
  item.addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

// scroll
$(document).scroll(function () {
  $('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height())
})

// chatbox

function showchatbox() {
  document.getElementById("chatbox").style.display = "block";
}

function hidechatbox() {
  document.getElementById("chatbox").style.display = "none";
}

// form Validation
let forRegistration = document.getElementById('form-registracion');
let age = false;

forRegistration.addEventListener('submit', function (event) {
  event.preventDefault();

  let form = event.target
  let errors = {};

  let usernameField = document.getElementById('Usname').value;

  if (usernameField.length < 5) {
    errors.username = 'Username field is invalid ';
  }

  if (usernameField == " ") {
    errors.username = "Username Can Not Be empty";
  }

  let password1 = document.getElementById("passw1").value;
  let password2 = document.getElementById("passw2").value;
  let minRequirement = document.getElementById("passw1");
  let passError = document.getElementById("error_mypassword");

  minRequirement.addEventListener("keyup", function () {
    let passValue = minRequirement.value;
    let passPattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (passValue == "") {
      passError.innerText = "Wrong Password";
      passError.style.color = "brown";
      minRequirement.style.border = "2px solid brown";
    } else if (!passValue.match(passPattern)) {

      passError.innerText = " Password must contain at least 8 characters, one uppercase character, one lowercase character and one number ";
      passError.style.color = "brown";
      minRequirement.style.border = "2px solid brown";
    } else {
      passError.innerText = "";
      minRequirement.style.border = "2px solid green";
    }
  });

  if (password1 == "") {
    errors.mypassword = "Please enter a password";
  }
  if (password1 != password2) {
    errors.mypassword2 = "Passwords do not match";
  }

  let age = false;
  let agree = document.getElementById('agree').checked;
  if (!agree) {
    errors.agree = " You Must Agree Our Terms And Conditions";
  }

  form.querySelectorAll('[name = "age"]').forEach((item) => {
    if (item.checked) {
      age = true;
    }
  });

  if (!age) {
    errors.age = " Please Select Your Age ";
  }

  console.log(errors);

  form.querySelectorAll(".error__text").forEach((eLement) => {
    eLement.innerText = " ";
  });

  for (let item in errors) {

    let spanError = document.getElementById("error_" + item);

    if (spanError) {
      spanError.innerText = errors[item];
    }
  }
  if (Object.keys(errors).length == 0) {
    form.submit();
  }
});

let passwordShowHide = document.getElementById("passw1");
let toggleIcon = document.getElementById("toggleIcon");

toggleIcon.addEventListener("click", function () {
  if (passwordShowHide.type == "password") {
    passwordShowHide.setAttribute("type", "text");
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordShowHide.setAttribute("type", "password");
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
});

let emailfield = document.getElementById('myemail');

emailfield.addEventListener("keyup", function () {
  let emailValue = document.getElementById('myemail').value;
  let spanErorr = document.getElementById("error_email")
  let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  if (emailValue.match(emailPattern)) {
    spanErorr.innerText = "Your Email is Valid";
    spanErorr.style.color = "green";
    emailfield.style.border = "2px solid green";
  } else {
    spanErorr.innerText = "Your Email is Invalid";
    spanErorr.style.color = "brown";
    emailfield.style.border = "2px solid brown";
  }
  if (emailValue == "") {
    spanErorr.innerText = " ";
  }
});

//burger bar

let navigation = document.getElementById('navbar')
let burgerBar = document.getElementById('burger-bar')

burgerBar.addEventListener('click', function () {
  navigation.classList.toggle('activeNav')
  burgerBar.classList.toggle('activeBurger-bar')
})

