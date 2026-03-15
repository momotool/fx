import React from 'react';
import { TeacherIcon } from './DialogueAvatar';

const items = [
  {
    id: 'fujitomi',
    name: 'フジトミ証券【シストレセレクト365】',
    feature: '難しい設定は不要。プロの戦略を選ぶだけで始められる。',
    teacherComment: '実績があるシステムを選ぶだけだから、初心者さんでも安心なんだよ。',
    borderColor: 'border-pastel-pink',
    affiliate: (
      <a href="https://px.a8.net/svt/ejp?a8mat=4AZBO2+9YF19M+34QW+BZ0Z5" rel="nofollow">
        <img
          border="0"
          width="300"
          height="250"
          alt="フジトミ証券 シストレセレクト365"
          src="https://www21.a8.net/svt/bgt?aid=260308946602&wid=004&eno=01&mid=s00000014612002011000&mc=1"
          className="mx-auto block max-w-full h-auto"
        />
      </a>
    ),
  },
  {
    id: 'xserver',
    name: 'エックスサーバー FOR Windows Server（VPS）',
    feature: '国内シェアNo.1。24時間安定して自動売買を動かせる専用サーバー。',
    teacherComment:
      '自分のPCをずっとつけておくのは大変だよね。専用サーバーに任せるのが正解なんだ。自分に合うプランを選んでみてね！',
    borderColor: 'border-pastel-mint',
    affiliate: (
      <>
        <a href="https://px.a8.net/svt/ejp?a8mat=4AZBO2+9ZLWH6+CO4+44XD9D" rel="nofollow">
          <img
            border="0"
            width="300"
            height="250"
            alt="エックスサーバー FOR Windows Server"
            src="https://www20.a8.net/svt/bgt?aid=260308946604&wid=004&eno=01&mid=s00000001642025014000&mc=1"
            className="mx-auto block max-w-full h-auto"
          />
        </a>
        <img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4AZBO2+9ZLWH6+CO4+44XD9D" alt="" />
      </>
    ),
  },
];

export default function AutoTradingStartSetSection() {
  return (
    <section id="auto-trading-set" className="mx-auto max-w-5xl px-4 py-6 md:py-8">
      <div className="rounded-3xl border-4 border-pastel-peach bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-2 rounded-xl border-l-4 border-cta bg-gradient-to-br from-pastel-orange to-amber-50/80 px-5 py-3.5 text-left text-xl font-bold text-gray-800 md:text-2xl">
          おすすめの「自動売買スタートセット」
        </h2>
        <p className="mb-8 text-sm text-gray-600">
          選ぶだけのシステムと、24時間動かす専用サーバーの2つ
        </p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.id}
              className={`rounded-3xl border-4 ${item.borderColor} bg-white p-5 shadow-sm md:p-6`}
            >
            {/* 先生イラスト＋吹き出し（先生＝右の同じ形式） */}
            <div className="mb-4 flex flex-row-reverse items-end gap-2">
              <TeacherIcon />
              <div className="relative max-w-[90%] rounded-2xl rounded-bl-md border-2 border-pastel-peach/70 bg-gradient-to-br from-[#f0f4fa] to-[#e8eef8] px-4 py-2.5 shadow-sm">
                <p className="text-sm leading-relaxed text-gray-700">{item.teacherComment}</p>
                <div className="absolute -right-1.5 bottom-2 h-2 w-2 rotate-45 border-b-2 border-l-2 border-pastel-peach/60 bg-[#e8eef8]" />
              </div>
            </div>

            <h3 className="mb-2 text-lg font-bold text-gray-800">{item.name}</h3>
            <p className="mb-4 text-sm text-gray-600">{item.feature}</p>

            <div className="flex justify-center overflow-hidden rounded-2xl bg-gray-50/80 py-3">
              {item.affiliate}
            </div>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}
