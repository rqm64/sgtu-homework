const _factory = {
    // create row element
    createRow: (...data) => {
        const row = document.createElement('div');
        row.className = "row";
        
        data.forEach(item => {
            const col = document.createElement('div');
            col.className = `col-${item.size}`;
            
            col.appendChild(typeof item.element === 'string' ? document.createTextNode(item.element) : item.element);
            row.appendChild(col);
        });

        return row;
    },
};
