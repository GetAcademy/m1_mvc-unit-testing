function translateToThiefLanguage(txt) {
    if (!txt) return '';
    const firstChar = txt.charAt(0);
    const firstCharTranslated = 'bcdfghjklmnpqrstvwxz'.includes(firstChar.toLowerCase())
        ? firstChar + 'o' + firstChar.toLowerCase()
        : firstChar;
    return firstCharTranslated + translateToThiefLanguage(txt.substring(1));
}