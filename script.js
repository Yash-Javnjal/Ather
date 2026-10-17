document.addEventListener('DOMContentLoaded', () => {
    const destinations = [
        {
            id: 'kyoto',
            name: 'Kyoto',
            country: 'Japan',
            price: 1200,
            mood: 'culture',
            crowd: 'Medium',
            bestTime: 'March to May',
            cardImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop',
            summary: 'Kyoto is a calm cultural escape filled with shrines, bamboo lanes, tea houses, and old streets that still feel peaceful when planned carefully. It is perfect for travelers who want history, food, photography, and a slower travel rhythm.',
            places: ['Fushimi Inari Shrine', 'Arashiyama Bamboo Grove', 'Gion District'],
            gallery: [
                'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=1200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?q=80&w=1200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1200&auto=format&fit=crop'
            ],
            travelTip: 'Book temple visits early in the morning to avoid peak tourist queues.'
        },
        {
            id: 'zermatt',
            name: 'Zermatt',
            country: 'Switzerland',
            price: 2400,
            mood: 'nature',
            crowd: 'Low',
            bestTime: 'June to September',
            cardImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop',
            summary: 'Zermatt is a mountain destination shaped by clean air, dramatic trails, and views of the Matterhorn. It suits travelers who want nature, scenic train rides, and a premium alpine experience without rushing through too many stops.',
            places: ['Matterhorn Viewpoint', 'Gornergrat Railway', 'Five Lakes Trail'],
            gallery: [
                'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=1200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
            ],
            travelTip: 'Keep one buffer day because mountain weather can change quickly.'
        },
        {
            id: 'vik',
            name: 'Vik',
            country: 'Iceland',
            price: 1800,
            mood: 'nature',
            crowd: 'Medium',
            bestTime: 'September to November',
            cardImage: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2024/02/12190030/Kirkjufell.jpg',
            summary: 'Vik is known for black sand beaches, basalt cliffs, waterfalls, and open landscapes. It is ideal for travelers who want raw natural beauty, road trips, and dramatic scenery with fewer city distractions.',
            places: ['Reynisfjara Beach', 'Dyrholaey Arch', 'Skogafoss Waterfall'],
            gallery: [
                'https://images.unsplash.com/photo-1504829857797-ddff29c27927?q=80&w=1200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1200&auto=format&fit=crop'
            ],
            travelTip: 'Check road and wind conditions before long drives.'
        },
        {
            id: 'amalfi',
            name: 'Amalfi',
            country: 'Italy',
            price: 2100,
            mood: 'coast',
            crowd: 'High',
            bestTime: 'April to June',
            cardImage: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1966&auto=format&fit=crop',
            summary: 'Amalfi is a coastal journey of cliff roads, sea views, lemon gardens, and colorful towns. It works best for travelers who want romantic views, slow lunches, boat rides, and warm Mediterranean energy.',
            places: ['Positano', 'Ravello', 'Amalfi Cathedral'],
            gallery: [
                'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=1200&auto=format&fit=crop'
            ],
            travelTip: 'Travel in shoulder season to reduce crowd pressure and hotel prices.'
        },
        {
            id: 'hawaii',
            name: 'Hawaii',
            country: 'USA',
            price: 2100,
            mood: 'coast',
            crowd: 'Medium',
            bestTime: 'April to October',
            cardImage: 'https://afar.brightspotcdn.com/dims4/default/4f745a6/2147483647/strip/true/crop/1989x1326+6+0/resize/900x600!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fc4%2F35%2Fb108ff5c4b56846ea66ae22086f8%2Fhawaii-karsten-winegeart-unsplash.jpg',
            summary: 'Hawaii blends beaches, volcanic landscapes, local food, and island culture. It is a strong choice for travelers who want ocean activities, scenic drives, relaxed stays, and nature-based experiences.',
            places: ['Waikiki Beach', 'Haleakala National Park', 'Road to Hana'],
            gallery: [
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=1200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1483168527879-c66136b56105?q=80&w=1200&auto=format&fit=crop'
            ],
            travelTip: 'Reserve popular nature activities early because daily visitor slots can fill up.'
        },
        {
            id: 'hamburg',
            name: 'Hamburg',
            country: 'Germany',
            price: 2500,
            mood: 'city',
            crowd: 'Low',
            bestTime: 'May to September',
            cardImage: 'https://complete-harmony-41d693229b.media.strapiapp.com/image_hamborg_00_b11e821739.jpeg',
            summary: 'Germany gives travelers a strong mix of history, modern cities, castles, rivers, museums, and efficient transport. Hamburg is a beautiful gateway with canals, historic warehouses, music culture, and easy connections to other German cities.',
            places: ['Miniatur Wunderland', 'Speicherstadt', 'Elbphilharmonie'],
            gallery: [
                'https://images.unsplash.com/photo-1559564484-e48b3e040ff4?q=80&w=1200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop'
            ],
            travelTip: 'Use trains between cities to save planning time and reduce local transport confusion.'
        }
    ];

    const destinationGrid = document.getElementById('destinationGrid');
    const destinationDetail = document.getElementById('destinationDetail');
    const budgetFilter = document.getElementById('budgetFilter');
    const moodFilter = document.getElementById('moodFilter');
    const matchBtn = document.getElementById('matchBtn');
    const finderResult = document.getElementById('finderResult');
    const msg = document.getElementById('msg');

    const getBudgetGroup = (price) => {
        if (price < 1500) {
            return 'low';
        }

        if (price <= 2200) {
            return 'medium';
        }

        return 'high';
    };

    function formatPrice(price) {
        return `$${price.toLocaleString('en-US')}`;
    }

    function showMsg(text) {
        msg.textContent = text;
        msg.classList.add('show');

        setTimeout(() => {
            msg.classList.remove('show');
        }, 2200);
    }

    function observeRevealElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-up, .reveal-text').forEach(el => observer.observe(el));
    }

    function renderDestinationCards() {
        destinationGrid.innerHTML = destinations.map((destination, index) => `
            <article class="card reveal-up" data-id="${destination.id}" tabindex="0">
                <div class="card-img">
                    <img src="${destination.cardImage}" alt="${destination.name}">
                </div>
                <div class="card-content">
                    <span class="card-idx">${String(index + 1).padStart(2, '0')}</span>
                    <h3>${destination.name}</h3>
                    <div class="card-details">
                        <span>${destination.country}</span>
                        <span class="price">${formatPrice(destination.price)}</span>
                    </div>
                    <button type="button" class="msg-btn view-btn">View details</button>
                </div>
            </article>
        `).join('');
    }

    function getClarityText(destination) {
        return `Budget clarity: estimated package starts at ${formatPrice(destination.price)}. Crowd check: ${destination.crowd} crowd level, best time is ${destination.bestTime}.`;
    }

    function renderDestinationDetail(destination) {
        destinationDetail.innerHTML = `
            <div class="detail-copy">
                <span class="label">${destination.country}</span>
                <h3>${destination.name} Travel Detail</h3>
                <p>${destination.summary}</p>

                <div class="clarity-panel">
                    <div>
                        <span>Trip Budget</span>
                        <strong>${formatPrice(destination.price)}</strong>
                    </div>
                    <div>
                        <span>Crowd Level</span>
                        <strong>${destination.crowd}</strong>
                    </div>
                    <div>
                        <span>Best Time</span>
                        <strong>${destination.bestTime}</strong>
                    </div>
                </div>

                <p class="travel-tip">${destination.travelTip}</p>
                <button type="button" class="msg-btn book-trip-btn" data-id="${destination.id}">Book Trip</button>
            </div>

            <div class="detail-gallery">
                ${destination.gallery.map((image, index) => `
                    <figure>
                        <img src="${image}" alt="${destination.places[index]}">
                        <figcaption>${destination.places[index]}</figcaption>
                    </figure>
                `).join('')}
            </div>
        `;

        destinationDetail.classList.add('active');
        destinationDetail.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function selectDestination(destinationId) {
        const destination = destinations.find(item => item.id === destinationId);

        if (!destination) {
            return;
        }

        document.querySelectorAll('.card').forEach(card => {
            card.classList.toggle('selected', card.dataset.id === destinationId);
        });

        renderDestinationDetail(destination);
    }

    function findTripMatch() {
        const budgetValue = budgetFilter.value;
        const moodValue = moodFilter.value;

        const match = destinations.find(destination => {
            const budgetMatches = budgetValue === 'any' || getBudgetGroup(destination.price) === budgetValue;
            const moodMatches = moodValue === 'any' || destination.mood === moodValue;

            return budgetMatches && moodMatches;
        });

        if (!match) {
            finderResult.textContent = 'No exact match found. Try changing budget or mood for more choices.';
            showMsg('No exact match found');
            return;
        }

        finderResult.textContent = `${match.name}, ${match.country} is the best match. ${getClarityText(match)}`;
        selectDestination(match.id);
    }

    renderDestinationCards();
    observeRevealElements();

    destinationGrid.addEventListener('click', (event) => {
        const card = event.target.closest('.card');

        if (card) {
            selectDestination(card.dataset.id);
        }
    });

    destinationGrid.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter') {
            return;
        }

        const card = event.target.closest('.card');

        if (card) {
            selectDestination(card.dataset.id);
        }
    });

    destinationDetail.addEventListener('click', (event) => {
        const bookButton = event.target.closest('.book-trip-btn');

        if (!bookButton) {
            return;
        }

        const destination = destinations.find(item => item.id === bookButton.dataset.id);

        if (destination) {
            showMsg(`${destination.name} trip booked successfully`);
        }
    });

    matchBtn.addEventListener('click', findTripMatch);

    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        showMsg('Your message has been sent successfully');
        form.reset();
    });

    const newsletterForm = document.querySelector('.newsletter-form');

    newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        showMsg('Newsletter subscription successful');
        newsletterForm.reset();
    });

    if (window.Lenis) {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }
});
