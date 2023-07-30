function increaseReactionCounts() {
    'use strict';

    setInterval(increaseCounts, 200);

    function increaseCounts() {
        const reactionCounts = document.querySelectorAll('.reactionCount-26U4As');

        reactionCounts.forEach(countElement => {
            const currentCount = parseInt(countElement.textContent);
            const randomIncrement = Math.floor(Math.random() * 150) + 1;
            const newCount = currentCount + randomIncrement;

            countElement.textContent = newCount.toString();
            countElement.classList.add('reaction-animation');
            setTimeout(() => {
                countElement.classList.remove('reaction-animation');
            }, 500);
        });
    }
}

increaseReactionCounts();
