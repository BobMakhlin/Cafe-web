class HttpError extends Error {
    constructor(response) {
        super(`Status ${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let response = await fetch(url);

    if (!response.ok) {
        throw new HttpError(response);
    }

    return response.json();
}
async function loadImage(url) {
    return new Promise((res, rej) => {
        let image = new Image();
        image.onload = () => res(image);
        image.src = url;
    })
}

export { loadJson, loadImage, HttpError };
