function wikiParser(elementsContent) {
    let wrapper = $(elementsContent);
    let text = wrapper.text();

    let regex_h1 = /=([^=]+)=/g;
    let regex_h2 = /==([^=]+)==/g;
    let regex_h3 = /===([^=]+)===/g;

    let regex_b = /'''([^']+)'''/g;
    let regex_i = /''([^']+)''/g;

    let regex_pipeLink = /\[\[([^\[\]]*)\|([^\[\]]*)]]/g
    let regex_link = /\[\[([^\[\]\|]*)\]\]/g;

    let h3_matches = text.match(regex_h3);

    for (h3_match of h3_matches) {
        let content = regex_h3.exec(h3_match)[1];
        regex_h1.lastIndex = 0;

        text = text.replace(h3_match, `<h3>${content}</h3>`);
    }

    let h2_matches = text.match(regex_h2);

    for (h2_match of h2_matches) {
        let content = regex_h2.exec(h2_match)[1];
        regex_h2.lastIndex = 0;

        text = text.replace(h2_match, `<h2>${content}</h2>`);
    }

    let h1_matches = text.match(regex_h1);

    for (h1_match of h1_matches) {
        let content = regex_h1.exec(h1_match)[1];
        regex_h1.lastIndex = 0;

        text = text.replace(h1_match, `<h1>${content}</h1>`);
    }

    let b_matches = text.match(regex_b);
    let headingRegex = /<h[123]>.*<\/h[123]>/g

    for (b_match of b_matches) {
        let content = regex_b.exec(b_match)[1];

        if (content.match(headingRegex) === null) { //does not contain any headings
            text = text.replace(b_match, `<b>${content}</b>`);
            b_matches = text.match(regex_b);
        }

        regex_b.lastIndex = 0;
    }

    let i_matches = text.match(regex_i);

    for (i_match of i_matches) {
        let content = regex_i.exec(i_match)[1];

        if (content.match(headingRegex) === null) { //does not contain any headings
            text = text.replace(i_match, `<i>${content}</i>`);
        }

        regex_i.lastIndex = 0;
    }

    let pipeLink_matches = text.match(regex_pipeLink);

    for (pipeLink_match of pipeLink_matches) {
        let groups = regex_pipeLink.exec(pipeLink_match)

        let link = groups[1];
        let content = groups[2];
        text = text.replace(pipeLink_match, `<a href="/wiki/${link}">${content}</a>`);

        regex_pipeLink.lastIndex = 0;
    }

    let linksMatches = text.match(regex_link);

    for (link_match of linksMatches) {
        let content = regex_link.exec(link_match)[1];
        text = text.replace(link_match, `<a href="wiki/${content}">${content}</a>`);
        regex_link.lastIndex = 0;
    }

    console.log(text);
    wrapper.text('');
    wrapper.append(text);
}
