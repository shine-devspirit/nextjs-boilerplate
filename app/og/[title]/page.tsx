import { Metadata } from 'next';

type Props = {
    params: { title: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
    const decodedTitle = decodeURIComponent(params.title);
    return {
        title: decodedTitle,
        openGraph: {
            title: decodedTitle,
            description: '카카오톡 썸네일 테스트',
            images: [
                {
                    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/OGimage.png',
                    width: 1200,
                    height: 630,
                },
            ],
        },
    };
};

export default function OGPage({ params }: Props) {
    return (
        <main>
            <h1>OG: {decodeURIComponent(params.title)}</h1>
        </main>
    );
}
