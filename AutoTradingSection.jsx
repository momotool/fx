import React from 'react';
import { DialogueRow } from './DialogueRow';

export default function AutoTradingSection() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-6 md:py-8">
      <div className="rounded-3xl border-4 border-pastel-peach bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-2 rounded-xl border-l-4 border-cta bg-gradient-to-br from-pastel-orange to-amber-50/80 px-5 py-3.5 text-left text-xl font-bold text-gray-800 md:text-2xl">
          寝てる間も先生ロボが働く！？「自動売買」のひみつ
        </h2>
        <p className="mb-6 text-sm text-gray-600">
          自動売買（シストレ）ってなに？
        </p>

        <div className="space-y-5">
          <DialogueRow role="beginner">
            自動売買って何？ ずっとチャート見てないとダメなの？
          </DialogueRow>
          <DialogueRow role="teacher">
            全自動の調理家電みたいなものだよ。材料（ルール）を入れておけば、あとはロボが勝手にやってくれる。自分でずっとチャートを見なくていいんだ。
          </DialogueRow>
          <DialogueRow role="beginner">
            感情でミスしたりしない？
          </DialogueRow>
          <DialogueRow role="teacher">
            そこがメリットなんだ。感情に振り回されないから、ミスが少ないんだよ。決めたルール通りに動くだけだから、寝てる間も安心して任せられる。
          </DialogueRow>
          <DialogueRow role="beginner">
            必要なものは何があるの？
          </DialogueRow>
          <DialogueRow role="teacher">
            2つあるよ。まず「選ぶだけのシステム（口座）」——プロの戦略を選べるサービスがあるんだ。あとは「24時間動かすための専用キッチン（VPS）」だね。自分のPCをずっとつけておくのは大変だから、専用のサーバーに任せるのがおすすめだよ。
          </DialogueRow>
        </div>

        <p className="mt-6 text-center">
          <a
            href="#auto-trading-set"
            className="inline-block rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:bg-cta-hover hover:shadow-lg"
          >
            ↓ おすすめの自動売買スタートセットを見る
          </a>
        </p>
      </div>
    </section>
  );
}
