module.exports = {
    'Demo test Google': function(client) {
        client
            .url('http://www.google.com')
            .waitForElementVisible('body', 1000)
            .assert.title('Google')
            .assert.visible('input[type=text]')
            .setValue('input[type=text]', 'NSM')
            .waitForElementVisible('button[name=btnG]', 1000)
            .click('button[name=btnG]')
            .pause(1000)
            .assert.containsText('#fac-ut > div.vk_c.card-section.fac-lstng > div.vk_gy.vk_h._KNe', 'Nationstar Mortgage Holdings Inc')
            .end();
    }
};