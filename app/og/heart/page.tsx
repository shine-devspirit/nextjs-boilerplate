export const metadata = {
    title: "하트 스샷 올려주세요",
    description: "좋아요 누르고 스샷을 올려주세요",
    openGraph: {
        title: "하트 스샷 올려주세요",
        description: "좋아요 누르고 스샷을 올려주세요",
        images: [
            {
                url: "https://nextjs-boilerplate-alpha-green-56.vercel.app/og/heart.jpg",
                width: 1200,
                height: 630,
            },
        ],
        type: "website",
    },
};

export default function LikePage() {
    return (
        <main
            style={{
                padding: "2rem",
                fontFamily: "sans-serif",
                textAlign: "center",
            }}
        >
            <h1>❤️ 하트를 눌러주셔서 감사합니다!</h1>
            <p>이제 인증 스샷을 올려주세요 📸</p>
        </main>
    );
}
