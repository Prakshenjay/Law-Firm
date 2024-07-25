document.addEventListener('DOMContentLoaded', function () {
    const members = document.querySelectorAll('.team__member');
    let currentIndex = 0;

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    members[currentIndex].classList.remove('active');
                    currentIndex = Array.from(members).indexOf(entry.target);
                    members[currentIndex].classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    members.forEach(member => {
        observer.observe(member);
    });

    const smoothScrollToNext = () => {
        if (currentIndex < members.length - 1) {
            members[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
        }
    };

    document.addEventListener('wheel', smoothScrollToNext);
});
