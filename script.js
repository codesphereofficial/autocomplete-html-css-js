document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("autocomplete-input");
    const list = document.getElementById("autocomplete-list");

    const suggestions = ["Apple", "Apple2", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew"];

    input.addEventListener("input", function () {
        const value = this.value.trim();
        list.innerHTML = "";
        if (!value) return;

        const regex = new RegExp(`(${value})`, 'gi'); 

        suggestions.forEach(suggestion => {
            if (suggestion.toLowerCase().startsWith(value.toLowerCase())) {
                const item = document.createElement("div");
                item.innerHTML = suggestion.replace(regex, '<strong>$1</strong>'); 
                item.addEventListener("click", function () {
                    input.value = suggestion;
                    list.innerHTML = "";
                });
                list.appendChild(item);
            }
        });
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest('.autocomplete-container')) {
            list.innerHTML = "";
        }
    });
});
