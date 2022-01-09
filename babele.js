Hooks.on('init', () => {
    if (typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'PF2E_compendium_cn',
            lang: 'cn',
            dir: 'compendium'
        });
    }
});
