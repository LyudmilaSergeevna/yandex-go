const images = [
  {
    link: '../../../images/01.png'
  },
  {
    link: '../../../images/02.png'
  },
  {
    link: '../../../images/05-2.png'
  },
  {
    link: '../../../images/06.png'
  }
];

const nextButton = document.querySelector('.offer-exclusive__button_type_next');
const previousButton = document.querySelector('.offer-exclusive__button_type_previous');
const image = document.querySelector('#photo');
let i=0;

function galeryViewing(i) {
  image.setAttribute('style', `background-image: url('${images[i].link}');`)
}

function toggleActiveButton(i) {
  console.log(i)
  if (i==0) {
    previousButton.classList.remove('offer-exclusive__button_active');
    previousButton.disabled=true;
  } else {
    previousButton.classList.add('offer-exclusive__button_active');
    previousButton.disabled=false;
  }
  if (i==images.length-1) {
    nextButton.classList.remove('offer-exclusive__button_active');
    nextButton.disabled=true;
  } else {
    nextButton.classList.add('offer-exclusive__button_active');
    nextButton.disabled=false;
  }
}

nextButton.addEventListener('click', () => {
  if (i>=0 && i<=images.length-2) { 
      i++;
      galeryViewing(i)
    } else {
      i=0;
      galeryViewing(i);
    }
    toggleActiveButton(i); 
})

previousButton.addEventListener('click', () => {
  if (i>=0 && i<=images.length, i--) { 
    galeryViewing(i);
    console.log(previousButton);
  } else {
    i=images.length-1;
    galeryViewing(i)
  }
  toggleActiveButton(i);
})