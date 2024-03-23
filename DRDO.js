const slider = document.qurreySelectorAll("slider")
let counter = 0;

slider.foreach{
	(slider, index) => {
		slider.style.left = `${index * 100}%`	
	}
}

const next = () => {
	counter++
	sliderImage()
}
const sliderImage = () => {
	slider.foreach{
		(slider, index) => {
			slider.style.transform = `translateX(-${index * 100}%)`	
		}
	}
}