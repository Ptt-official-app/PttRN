import {FetchArticle} from "./article";

test('Article API and model creation', async () => {
    const sysop = await FetchArticle.ofBoard('SYSOP');
    expect(sysop.length).toBeGreaterThan(0)
    expect(sysop[0].title.length).toBeGreaterThan(0)
});
