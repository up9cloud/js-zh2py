'use strict';

const CharToPinyinMap = require('./CharToPinyinMap.js');

const upperFirstChar = pinyin_str => {
    if (pinyin_str.length > 0) {
        let capital = pinyin_str.substr(0, 1).toUpperCase();
        let left_str = pinyin_str.substr(1, pinyin_str.length);
        return capital + left_str;
    }
}

module.exports = char => {
    let pinyin = CharToPinyinMap.get(char);
    if (pinyin) {
        return upperFirstChar(pinyin);
    }
    return pinyin;
}