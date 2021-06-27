function solution() {
    const [listGift, sent, discarded] = document.querySelectorAll('section ul');
    const input = document.querySelector('input');
    document.querySelector('button').addEventListener('click', addGift);

    function addGift() {
        const name = input.value;
        input.value = '';

        let element = e('li', name, 'giftsList');
        let sendButton = e('button', 'Send', 'sendButton');
        let discardButton = e('button', 'Discard', 'discardButton');

        element.appendChild(sendButton);
        element.appendChild(discardButton);

        sendButton.addEventListener('click', () => send(name, element));
        discardButton.addEventListener('click', () => discard(name, element));

        listGift.appendChild(element);

        sortGift();
    }

    function send(name, gift) {
        gift.remove();
        const element = e('li', name, 'sentGifts');
        sent.appendChild(element);
    }

    function discard(name, gift) {
        gift.remove();
        const element = e('li', name, 'discardedGifts');
        discarded.appendChild(element);
    }

    function sortGift() {
        Array.from(listGift.children).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach((g) => {
            listGift.appendChild(g);
        })
    }
    function e(type, content, addClass) {
        const result = document.createElement(type);
        result.textContent = content;

        if (addClass) {
            result.className = addClass;
        }

        return result;
    }
}

function solution() {
    const [gifts, sent, discarded] = document.querySelectorAll('section ul');
    const input = document.querySelector('input');
    document.querySelector('button').addEventListener('click', addGift);


    function addGift(){
        const name = input.value;
        input.value = '';

        const element = e('li', name, 'gift');
        const sendButton = e('button', 'Send', 'sendButton');
        const discardButton = e('button', 'Discard', 'discardButton');
        element.appendChild(sendButton);
        element.appendChild(discardButton);


        sendButton.addEventListener('click', () => sendGift(name, element));
        discardButton.addEventListener('click', () => discardGift(name, element));
        gifts.appendChild(element);


        sortGifts();
    }



    function sendGift(name, gift){
        gift.remove();
        const element = e('li', name, 'gift');
        sent.appendChild(element);
    }


    function discardGift(name, gift){
        gift.remove();
        const element = e('li', name, 'gift');
        discarded.appendChild(element);
    }


    function sortGifts(){
        Array.from(gifts.children).sort((a, b)=> a.textContent.localeCompare(b.textContent)).forEach(g => gifts.appendChild(g));
    }


    function e(type, content, addClass){
        const result = document.createElement(type);
        result.textContent = content;
        if(addClass){
            result.className = addClass;
        }
        return result;
    }
}