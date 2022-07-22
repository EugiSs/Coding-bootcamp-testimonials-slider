const app = document.querySelector('.testimonial');

// html content
const testimonials = [
	{
		id: 1,
		photo: 'img/image-tanya.jpg',
		author: 'Tanya Sinclair',
		profession: 'UX Engineer',
		text: 'I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.'
	},
	{
		id: 2,
		photo: 'img/image-john.jpg',
		author: 'John Tarkpor',
		profession: 'Junior Front-end Developer',
		text: 'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.'
	},
];

// fill testimonial with content
window.onload = testimonials.forEach((t) => {
	let img = t.photo;
	let author = t.author;
	let profession = t.profession;
	let text = t.text;
	let id = t.id;

	// first block is active
	let itemClass = 'hidden';
	if (id == 1) {
		itemClass = 'active';
	}

	app.insertAdjacentHTML('beforeend', `
	<div class="testimonial__body ${itemClass}" data-id="${id}">
		<div class="testimonial__img">
			<img src="${img}" alt="img-avatar">
		</div>
		<div class="testimonial__content">
			<p class="testimonial__text">“ ${text} ”
			</p>
			<p class="testimonial__author">
				${author}
				<span class="testimonial__author-profession">
					${profession}
				</span>
			</p>
		</div>
	</div>
	`)
});

document.querySelector('#control-left').addEventListener('click', function () {
	toggleTestimonial('l');
	return false;
});
document.addEventListener('keydown', function(e) {
	if (e.key == 'ArrowLeft') {
		toggleTestimonial('l');
	}
});

document.querySelector('#control-right').addEventListener('click', function () {
	toggleTestimonial('r');
	return false;
});
document.addEventListener('keydown', function(e) {
	if (e.key == 'ArrowRight') {
		toggleTestimonial('r');
	}
})


function toggleTestimonial(dir) {
	let currentItem = document.querySelector(".testimonial__body.active");
	let id = currentItem.dataset.id;

	currentItem.classList.remove("active");
	currentItem.classList.add("hidden");

	// find elem that has the current id, then check which btn was clicked and toggle the elem
	let currentIndex = testimonials.findIndex(obj => obj.id == id)
	if (dir == 'r') {
		if (currentIndex >= testimonials.length - 1) {
			currentIndex = 0;
		} else {
			currentIndex += 1;
		}
	} else {
		if (currentIndex == 0) {
			currentIndex = testimonials.length - 1;
		} else {
			currentIndex -= 1;
		}
	};

	// assign active class to new elem
	let newItem = document.querySelector(`.testimonial__body[data-id="${testimonials[currentIndex].id}"]`);
	newItem.classList.remove("hidden");
	newItem.classList.add("active");
};



