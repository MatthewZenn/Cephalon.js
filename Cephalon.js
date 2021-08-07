function wiki(item){
    var str = item.replace(/['"]+/g, '');
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    var caps = str.split(' ').map(capitalize).join('_');
    output = 'https://warframe.fandom.com/wiki/'+caps;
    console.log(output)
}

wiki('bo prime');
