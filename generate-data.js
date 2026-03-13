const fs = require('fs');
const path = require('path');

const activitiesDir = path.join(process.cwd(), 'public', 'activities');
const folders = fs.readdirSync(activitiesDir).filter(f => {
    const fullPath = path.join(activitiesDir, f);
    return fs.statSync(fullPath).isDirectory();
});

const result = folders.map((folder, index) => {
    const parts = folder.split(' - ');
    let date = "";
    let title = "";

    if (parts.length >= 3) {
        // Handle format: "014 - 14 Nov 2025 - Gaming"
        date = parts[1];
        title = parts.slice(2).join(' - ');
    } else if (parts.length === 2) {
        // Handle format: "14 Nov 2025 - Gaming"
        date = parts[0];
        title = parts[1];
    } else {
        title = folder;
        date = "TBA";
    }

    // Clean up title (remove trailing spaces, etc.)
    title = title.trim();
    date = date.trim();

    const folderPath = path.join(activitiesDir, folder);
    let images = [];

    function getImages(dir) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                getImages(fullPath);
            } else if (/\.(jpg|jpeg|png|gif)$/i.test(file)) {
                // Get relative path from public/
                const relPath = path.relative(path.join(process.cwd(), 'public'), fullPath).replace(/\\/g, '/');
                images.push('/' + relPath);
            }
        });
    }

    getImages(folderPath);

    // Sort images by name to ensure consistency
    images.sort();

    // Choose the middle image for the slider to have more variety (if more than 2, else first)
    const sliderImage = images.length > 2 ? images[2] : (images[0] || "/hero.jpg");

    return {
        id: index + 1,
        image: sliderImage,
        title: title,
        description: `Une activité passionnante organisée par le Centre de Jeunesse Tétouan.`,
        content: `L'activité "${title}" s'est déroulée le ${date} au sein du Centre de Jeunesse Tétouan. Cet événement a permis aux participants d'échanger, d'apprendre et de développer de nouvelles compétences dans un cadre convivial et professionnel.`,
        date: date,
        location: "Centre de Jeunesse Tétouan",
        gallery: images
    };
});

fs.writeFileSync('app/data/hero-carousel.json', JSON.stringify(result, null, 4), 'utf8');
console.log('JSON updated with new folder structure and compressed images.');
