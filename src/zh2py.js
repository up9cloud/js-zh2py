'use strict';

const charToPinyin = require('./charToPinyin.js');

const should_not_translate_regex = new RegExp('[a-zA-Z0-9，。？！、；：‘’“”（）【】{}-《》 ]');

module.exports = (source, replacement_for_not_translate) => {
    let result = '';
    for (let i = 0; i < source.length; i++) {
        let char = source.substr(i, 1);
        if (should_not_translate_regex.test(char)) {
            result += char + ' ';
        } else {
            let pinyin = charToPinyin(char);
            if (pinyin) {
                result += pinyin + ' ';
            } else {
                if (replacement_for_not_translate) {
                    result += replacement_for_not_translate + ' ';
                } else {
                    result += char + ' ';
                }
            }
        }
    }
    result = result.replace(/ /g, ' ');
    while (result.indexOf('--') > 0) {
        result = result.replace('--', '-');
    }
    return result;
};