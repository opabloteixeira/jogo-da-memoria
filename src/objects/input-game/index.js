const inputGame = (function(){
    const module = {}


    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .input-game {
                display: block;
                border-bottom: 2px solid rgba(58,64,66, 0.5);
                color: #3a4042;
                font-size: 18px;
                font-weight: bold;
                padding: 12px 0 12px 0;
                width: 100%;
            }

            .input-game + .label-game {
                margin-top: 30px
            }
        
        `;


        $head.insertAdjacentElement("beforeend", $style);
    }

    module.render = ( props ) => {

        const {id, type, placeholder} = props; //usando desestruturação 

        module._style();

        return `<input
                    id="${id}"
                    class="input-game" 
                    type="${type}" 
                    placeholder="${placeholder}">
                `;
    }


    return {
        render: module.render,
    }
})();