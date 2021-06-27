import { render, screen } from "@testing-library/react";
import Index from '../pages/index';
import App from '../pages/_app';
import type Post from '../types/post';

describe('App', () => {
    const allPosts:  Array<Post> = [{
        slug: 'slug',
        title: 'title',
        date: '2020-03-16T05:35:07.322Z',
        coverImage: 'coverImage',
        author: {
            name: 'author',
            picture: 'author'
        },
        excerpt: 'excerpt',
        ogImage: {
            url: 'ogImage'
        },
        content: 'Content'
    }]

    it('should not crash', () => {
        render(<Index allPosts={allPosts} />);
        expect(
            screen.getByRole('heading', { name: 'Statically Generated with Next.js.'})
        ).toBeInTheDocument();
    });
});