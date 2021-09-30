import {FetchBoard} from "./board";

test('Board API and model creation', async () => {
    const popularBoards = await FetchBoard.popularBoards();
    expect(popularBoards.length).toBeGreaterThan(0);
    const sampleBoard = popularBoards[0];
    expect(sampleBoard.bid.length).toBeGreaterThan(0);
    const articles = await (sampleBoard.fetchArticles());
    expect(articles.length).toBeGreaterThan(0);
});
