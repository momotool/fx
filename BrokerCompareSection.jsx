import React from 'react';

const brokers = [
  {
    id: 'dmm',
    name: 'DMM FX',
    badge: 'おススメ',
    borderColor: 'border-pastel-pink',
    features: '口座数国内No.1・スプレッドが狭い・スマホアプリが使いやすい',
    recommend: '初めての口座として選ばれることが多く、情報サイトやツールも豊富。デモ取引で練習してから実践しやすい。',
    affiliate: (
      <>
        <a href="https://px.a8.net/svt/ejp?a8mat=3H5G35+A5K8IY+1WP2+6D4GH" rel="nofollow">
          <img
            border="0"
            width="300"
            height="250"
            alt="DMM FX"
            src="https://www26.a8.net/svt/bgt?aid=210206129614&wid=004&eno=01&mid=s00000008903001069000&mc=1"
            className="mx-auto block max-w-full h-auto"
          />
        </a>
      </>
    ),
  },
  {
    id: 'tossy',
    name: 'TOSSY',
    badge: null,
    borderColor: 'border-pastel-mint',
    features: 'シンプルな画面・少額から取引可能・サポートが手厚い',
    recommend: 'FXを初める人向けに画面が整理されていて、迷いにくい。少額で試したい人にも向いている。',
    affiliate: (
      <>
        <a href="https://px.a8.net/svt/ejp?a8mat=4AZBO2+9X8622+1WP2+1HNSR5" rel="nofollow">
          <img
            border="0"
            width="300"
            height="250"
            alt="TOSSY"
            src="https://www29.a8.net/svt/bgt?aid=260308946600&wid=004&eno=01&mid=s00000008903009013000&mc=1"
            className="mx-auto block max-w-full h-auto"
          />
        </a>
      </>
    ),
  },
  {
    id: 'jfx',
    name: 'JFX',
    badge: 'スキャル公認',
    borderColor: 'border-pastel-lavender',
    features: 'スキャルピング取引が公認・短期トレードに強い・高スワップ',
    recommend: '数秒〜数分でサッと決済する「スキャル」をしたい人向け。公認なのでルール違反の心配がなく安心。',
    affiliate: (
      <>
        <a href="https://px.a8.net/svt/ejp?a8mat=3TAN11+AGVH0Q+1FOU+6BU5T" rel="nofollow">
          <img
            border="0"
            width="300"
            height="250"
            alt="JFX"
            src="https://www26.a8.net/svt/bgt?aid=230603797633&wid=004&eno=01&mid=s00000006699001063000&mc=1"
            className="mx-auto block max-w-full h-auto"
          />
        </a>
      </>
    ),
  },
  {
    id: 'hirose',
    name: 'ヒロセ通商',
    badge: 'スキャル公認',
    borderColor: 'border-pastel-blue',
    features: 'スキャルピング公認・LION FXなど独自サービス・業界老舗',
    recommend: 'スキャルやデイトレをしたい人に。長年運営している証券会社で、自動売買との相性も良い。',
    affiliate: (
      <>
        <a href="https://px.a8.net/svt/ejp?a8mat=4AZBO2+9VFV8Q+25B2+61Z81" rel="nofollow">
          <img
            border="0"
            width="300"
            height="250"
            alt="ヒロセ通商"
            src="https://www20.a8.net/svt/bgt?aid=260308946597&wid=004&eno=01&mid=s00000010019001017000&mc=1"
            className="mx-auto block max-w-full h-auto"
          />
        </a>
      </>
    ),
  },
  {
    id: 'matsui',
    name: '松井証券',
    badge: '初心者向け',
    borderColor: 'border-pastel-peach',
    features: '1通貨から取引可能・老舗ネット証券・シンプルな取引画面',
    recommend: '少額で始めやすく、まずは練習したい初心者に向いている口座。',
    affiliate: (
      <>
        <a href="https://px.a8.net/svt/ejp?a8mat=4AZGCC+9ICBXM+4SM6+61Z81" rel="nofollow">
          <img
            border="0"
            width="250"
            height="250"
            alt="松井証券"
            src="https://www29.a8.net/svt/bgt?aid=260315004575&wid=004&eno=01&mid=s00000022371001017000&mc=1"
            className="mx-auto block max-w-full h-auto"
          />
        </a>
        <img
          border="0"
          width="1"
          height="1"
          src="https://www15.a8.net/0.gif?a8mat=4AZGCC+9ICBXM+4SM6+61Z81"
          alt=""
        />
      </>
    ),
  },
];

export default function BrokerCompareSection() {
  return (
    <section id="broker-compare" className="mx-auto max-w-5xl px-4 py-6 md:py-8">
      <div className="rounded-3xl border-4 border-pastel-peach bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-2 rounded-xl border-l-4 border-cta bg-gradient-to-br from-pastel-orange to-amber-50/80 px-5 py-3.5 text-left text-xl font-bold text-gray-800 md:text-2xl">
          FX口座比較（超初心者向け）
        </h2>
        <p className="mb-8 text-sm text-gray-600">
          口座を比べてみよう
        </p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {brokers.map((broker) => (
            <article
              key={broker.id}
              className={`rounded-2xl border-4 ${broker.borderColor} bg-white p-5 shadow-sm transition hover:shadow-md md:p-6`}
            >
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-bold text-gray-800">{broker.name}</h3>
              {broker.badge && (
                <span className="rounded-full bg-pastel-pink px-2.5 py-0.5 text-xs font-bold text-gray-700">
                  {broker.badge}
                </span>
              )}
            </div>

            {broker.features && (
              <div className="mb-3">
                <p className="text-xs font-bold text-gray-500">特徴</p>
                <p className="text-sm leading-relaxed text-gray-700">{broker.features}</p>
              </div>
            )}
            {broker.recommend && (
              <div className="mb-4">
                <p className="text-xs font-bold text-gray-500">おすすめポイント</p>
                <p className="text-sm leading-relaxed text-gray-700">{broker.recommend}</p>
              </div>
            )}

            <div className="flex justify-center overflow-hidden rounded-xl bg-gray-50/80 py-3">
              {broker.affiliate}
            </div>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}
