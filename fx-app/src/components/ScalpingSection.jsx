import React from 'react';
import { DialogueRow } from './DialogueRow';

export default function ScalpingSection() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-6 md:py-8">
      <div className="rounded-3xl border-4 border-pastel-peach bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-2 rounded-xl border-l-4 border-cta bg-gradient-to-br from-pastel-orange to-amber-50/80 px-5 py-3.5 text-left text-xl font-bold text-gray-800 md:text-2xl">
          スキャルピングってなに？
        </h2>
        <p className="mb-6 text-sm text-gray-600">
          数秒〜数分でポジションを閉じる「超短期」のやり方です。
        </p>

        <div className="space-y-5">
          <DialogueRow role="beginner">
            スキャルピングって何？ 難しそう…。
          </DialogueRow>
          <DialogueRow role="teacher">
            <strong>「買ってすぐ、数分以内に売る」</strong>イメージだよ。長く持ち続けないから、寝てる間に相場が大暴落しても、その時点ではもうポジションを閉じてるから影響を受けにくいんだ。
          </DialogueRow>
          <DialogueRow role="teacher">
            注意点は、<strong className="text-gray-800">このやり方を禁止している会社がある</strong>こと。だから「スキャルピングOK」の口座を選ぶ必要があるんだ。<strong className="text-gray-800">JFXやヒロセ通商は公認</strong>だから、スキャルしたい人は下の比較表から選んでみてね。
          </DialogueRow>
        </div>

        <p className="mt-6 text-center">
          <a
            href="#broker-compare"
            className="inline-block rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:bg-cta-hover hover:shadow-lg"
          >
            ↓ 口座比較表を見る
          </a>
        </p>
      </div>
    </section>
  );
}
