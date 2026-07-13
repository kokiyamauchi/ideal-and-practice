// src/lib/programs-data.ts
// 研修情報の一元管理ファイル
// このファイルが真正本。一覧・詳細・フォームすべてここから生成する。

export type CurriculumItem = {
  title: string;
  description: string;
};

export type Deliverable = {
  title: string;
  description: string;
};

export type Program = {
  id: string;
  slug: string;
  order: number;
  category: "intro" | "life-os" | "org-os" | "biz-os" | "retention";
  categoryLabel: string;
  title: string;
  subtitle: string;
  summary: string;
  challengeTags: string[];       // 課題から選ぶセクション用
  suitableFor: string[];         // このような企業に（最大3項目）
  notSuitableFor: string[];      // 適していないケース
  outcomes: string[];            // 得られる状態（最大3項目）
  goals: string[];               // 到達目標（詳細ページ用）
  curriculum: CurriculumItem[];
  deliverables: Deliverable[];
  duration: string;
  capacity: string;
  price: string;
  priceNote?: string;
  relatedSlugs?: string[];
  followupOptions?: string[];
};

export const programs: Program[] = [
  // ────────────────────────────────────────
  // はじめての方
  // ────────────────────────────────────────
  {
    id: "lhmp-intro",
    slug: "lhmp-intro",
    order: 1,
    category: "intro",
    categoryLabel: "はじめての方",
    title: "LHMP入門研修",
    subtitle: "まず、LHMPの全体像を社内で共有する",
    summary:
      "LHMPの全体像を通じて、人生・仕事・法人・主体性の関係を理解する導入研修です。本格導入前に、社内の反応や理解度を確認する入り口として機能します。",
    challengeTags: ["lhmp-overview"],
    suitableFor: [
      "まずLHMPを社内で共有したい",
      "本格導入前に社員の反応を確認したい",
      "人材育成の入口となる研修をお探しの企業",
    ],
    notSuitableFor: [
      "深い個人内省や個別行動計画まで求めている",
      "組織制度の設計を依頼したい",
    ],
    outcomes: [
      "LHMPの基本構造を共通言語にできる",
      "仕事と人生を接続する視点を持てる",
      "次に取り組む研修の方向性を判断できる",
    ],
    goals: [
      "LHMPの基本構造を理解する",
      "自分の幸福・理想の概念を言語化する",
      "仕事と人生を接続する視点を持つ",
    ],
    curriculum: [
      { title: "LHMP概論・最上位命題", description: "LHMPが提示する人生・法人・主体性の関係を概説します。" },
      { title: "幸福とは何か・理想形成の構造", description: "幸福と理想の違いを整理し、理想形成の仕組みを理解します。" },
      { title: "正しい知識と正しい思考力", description: "判断の質を高める知識と思考の関係を学びます。" },
      { title: "仕事の意味づけ・法人との関係", description: "個人の人生において仕事と法人がどう位置づくかを整理します。" },
      { title: "主体性の正しい定義", description: "精神論ではない主体性の構造を理解します。" },
    ],
    deliverables: [
      { title: "LHMPサマリー資料", description: "研修後も参照できるLHMPの全体像をまとめた資料です。" },
      { title: "理想メモシート", description: "自分の幸福・理想の初稿を記録するワークシートです。" },
    ],
    duration: "90分",
    capacity: "最大20名",
    price: "132,000円（税別）",
    relatedSlugs: ["life-os-workshop", "life-os"],
  },

  // ────────────────────────────────────────
  // 人生OS
  // ────────────────────────────────────────
  {
    id: "life-os-workshop",
    slug: "life-os-workshop",
    order: 2,
    category: "life-os",
    categoryLabel: "人生OS",
    title: "理想形成ワークショップ",
    subtitle: "違和感や憧れを手がかりに、自分の理想を言葉にする",
    summary:
      "違和感や憧れを手がかりに、自分が望む状態を言葉にする実践型ワークショップです。理想が曖昧な社員に、まず「自分の言葉」を持ってもらうことを目的とします。",
    challengeTags: ["ideal-unclear"],
    suitableFor: [
      "社員が自分の目標や理想を言葉にできない",
      "ビジョン研修の前に個人の価値観を整理したい",
      "内省・対話を重視した研修を求める方",
    ],
    notSuitableFor: [
      "管理職育成や組織管理を中心に扱いたい",
      "人事制度を設計してほしい",
    ],
    outcomes: [
      "自分の違和感・憧れを整理できる",
      "理想の初稿を文章として作成できる",
      "他者のフィードバックを通じて理想を問い直せる",
    ],
    goals: [
      "幸福と理想の違いを理解する",
      "自分の違和感・憧れを言語化する",
      "理想の初稿を文章として書き出す",
    ],
    curriculum: [
      { title: "幸福と理想とは何か", description: "幸福と理想の概念の違いを整理します。" },
      { title: "違和感・憧れの棚卸しワーク", description: "日常の違和感・憧れを書き出し整理します。" },
      { title: "理想の言語化演習", description: "自分の言葉で理想の初稿を書きます。" },
      { title: "グループシェアと問い直し", description: "相互フィードバックで理想をブラッシュアップします。" },
    ],
    deliverables: [
      { title: "個人理想メモシート", description: "ワーク中に書いた違和感・憧れの整理シートです。" },
      { title: "理想文草稿", description: "自分の言葉で書いた理想の初稿テキストです。" },
    ],
    duration: "3時間",
    capacity: "12名まで",
    price: "275,000円（税別）",
    relatedSlugs: ["life-os"],
  },
  {
    id: "life-os",
    slug: "life-os",
    order: 3,
    category: "life-os",
    categoryLabel: "人生OS",
    title: "人生OS研修",
    subtitle: "理想、判断基準、知識、思考、時間、仕事を接続する",
    summary:
      "理想、判断基準、知識、思考、時間、仕事を接続し、自分の人生と行動の設計図をつくります。理想の言語化から30日間の行動計画まで、包括的に扱う1日研修です。",
    challengeTags: ["ideal-unclear", "initiative"],
    suitableFor: [
      "目標を決めても行動が続かない社員が多い",
      "社員に主体的な判断基準を持ってほしい",
      "人生を自分で設計する視点を育てたい",
    ],
    notSuitableFor: [
      "組織・管理職向けの内容を中心に扱いたい",
      "事業管理・業務改善を扱いたい",
    ],
    outcomes: [
      "自分の理想と判断基準を言語化できる",
      "時間・仕事・行動を理想へ接続できる",
      "30日間の行動計画を作成できる",
    ],
    goals: [
      "自分の幸福・理想を言語化する",
      "判断基準を自分の言葉で定義する",
      "時間・行動・仕事を理想へ接続する",
    ],
    curriculum: [
      { title: "幸福最大化の構造", description: "幸福と理想の関係を体系的に理解します。" },
      { title: "理想形成ワーク", description: "違和感・憧れを手がかりに理想を言語化します。" },
      { title: "正しい知識・思考力", description: "判断の質を高める知識と思考の仕組みを学びます。" },
      { title: "時間設計・優先順位", description: "理想に向けた時間の使い方を設計します。" },
      { title: "行動計画30日", description: "研修後30日の具体的な行動計画を作成します。" },
    ],
    deliverables: [
      { title: "個人理想整理シート", description: "幸福・理想・判断基準を整理した個人シートです。" },
      { title: "行動計画30日版", description: "研修後30日間の具体的な行動計画です。" },
      { title: "研修実施レポート", description: "研修全体の実施概要と所感のまとめです。" },
    ],
    duration: "1日（約6時間）",
    capacity: "12名まで",
    price: "440,000円（税別）",
    relatedSlugs: ["life-os-workshop", "agency"],
  },

  // ────────────────────────────────────────
  // 人・組織OS
  // ────────────────────────────────────────
  {
    id: "initiative-development",
    slug: "agency",
    order: 4,
    category: "org-os",
    categoryLabel: "人・組織OS",
    title: "主体性開発研修",
    subtitle: "個人の理想と会社での役割をつなぐ",
    summary:
      "「主体的に動け」という精神論ではなく、自分の理想と会社での役割の接続点を整理します。社員が自分から動く判断基準を持てるようにする研修です。",
    challengeTags: ["initiative"],
    suitableFor: [
      "社員が指示待ちになっている",
      "仕事や役割が自分ごとになっていない",
      "自律的なチームをつくりたい経営者",
    ],
    notSuitableFor: [
      "管理職の権限移譲や育成を中心に扱いたい",
      "組織の制度設計を依頼したい",
    ],
    outcomes: [
      "自ら動くための判断基準を持てる",
      "個人の理想と法人での役割を接続できる",
      "行動実験として試す最初のステップを設計できる",
    ],
    goals: [
      "主体性の正しい定義を理解する",
      "個人理想と法人役割の接続点を見つける",
      "自分から動く判断基準を持つ",
    ],
    curriculum: [
      { title: "主体性とは何か（LHMPの定義）", description: "精神論ではない主体性の構造を理解します。" },
      { title: "個人ビジョン整理ワーク", description: "自分の理想・価値観を言語化します。" },
      { title: "法人の期待役割の言語化", description: "会社が期待する役割を自分の言葉で整理します。" },
      { title: "接続図の作成", description: "個人の理想と法人の役割が重なる部分を可視化します。" },
      { title: "行動実験設計", description: "まず試してみる最初の行動を設計します。" },
    ],
    deliverables: [
      { title: "個人・法人ビジョン接続図", description: "個人理想と法人役割の重なりを整理した図です。" },
      { title: "行動実験シート", description: "研修後30日間で試す行動、期限、確認方法を整理します。" },
    ],
    duration: "3時間",
    capacity: "12名まで",
    price: "275,000円（税別）",
    relatedSlugs: ["vision", "life-os"],
  },
  {
    id: "vision-connection",
    slug: "vision",
    order: 5,
    category: "org-os",
    categoryLabel: "人・組織OS",
    title: "個人・法人ビジョン接続研修",
    subtitle: "理念・MVVを社員の役割と行動へ変える",
    summary:
      "法人の理念と社員個人の価値観が重なる部分を見つけ、具体的な役割行動へ変換します。理念を唱和しても行動が変わらない、という課題に直接アプローチします。",
    challengeTags: ["vision"],
    suitableFor: [
      "理念やMVVを策定したが、現場で使われていない",
      "社員が会社の方向性を自分ごとにできない",
      "ビジョン浸透研修を強化したい人事担当",
    ],
    notSuitableFor: [
      "法人理念やMVVがまだ整理されていない",
      "単なる理念説明会を希望している",
    ],
    outcomes: [
      "法人ビジョンを自分の言葉で解釈できる",
      "理念を役割と具体的な行動へ落とし込める",
      "個人の価値観と法人の方向性の重なりを言語化できる",
    ],
    goals: [
      "法人ビジョンを自分の言葉で解釈する",
      "個人の理想と法人の方向性の重なりを見つける",
      "役割を意味ある行動として設計する",
    ],
    curriculum: [
      { title: "法人と個人の理想の構造", description: "法人理念と個人の理想がどう関係するかを整理します。" },
      { title: "ビジョンの意味解釈ワーク", description: "法人のビジョンを自分の言葉で解釈します。" },
      { title: "重なり発見ワーク", description: "個人の価値観と法人の方向性が重なる部分を探します。" },
      { title: "役割・行動計画設計", description: "重なりを具体的な役割行動へ落とし込みます。" },
    ],
    deliverables: [
      { title: "個人・法人ビジョン接続図", description: "個人理想と法人ビジョンの重なりを整理した図です。" },
      { title: "役割行動計画", description: "理念を具体的な役割行動へ落とした計画シートです。" },
    ],
    duration: "3時間",
    capacity: "12名まで",
    price: "275,000円（税別）",
    relatedSlugs: ["agency", "manager"],
  },
  {
    id: "manager-training",
    slug: "manager",
    order: 6,
    category: "org-os",
    categoryLabel: "人・組織OS",
    title: "管理者・管理職研修",
    subtitle: "判断・任せ方・対話・育成の仕組みを整える",
    summary:
      "管理職の役割を再定義し、判断、権限移譲、対話、フィードバック、育成の仕組みを整えます。管理職が抱え込む構造を解消し、チームが動ける状態をつくります。",
    challengeTags: ["manager"],
    suitableFor: [
      "管理職が仕事を抱え込んでいる",
      "部下へ任せられず、人が育たない",
      "管理職育成プログラムを整備したい企業",
    ],
    notSuitableFor: [
      "一般社員の主体性・理想形成を中心に扱いたい",
      "人事評価制度や賃金設計を依頼したい",
    ],
    outcomes: [
      "任せるための判断基準を持てる",
      "対話・育成・1on1の基本設計を作れる",
      "管理職としての役割を再定義できる",
    ],
    goals: [
      "任せるための判断基準を持つ",
      "対話・フィードバックの型を身につける",
      "育成と1on1の仕組みを設計する",
    ],
    curriculum: [
      { title: "管理職の役割再定義", description: "「管理する」ではなく「人が動ける状態をつくる」役割を整理します。" },
      { title: "権限移譲の設計", description: "任せる範囲・基準・確認方法を設計します。" },
      { title: "対話・フィードバック演習", description: "1on1・フィードバックの実践型演習を行います。" },
      { title: "育成・1on1設計", description: "継続的な育成の仕組みを設計します。" },
      { title: "行動計画", description: "研修後に実行する管理行動の計画を作成します。" },
    ],
    deliverables: [
      { title: "役割・責任・期限整理表", description: "チームの役割分担を整理した一覧です。" },
      { title: "権限移譲設計書", description: "任せる範囲と確認ルールをまとめた設計書です。" },
      { title: "研修実施レポート", description: "研修の実施概要と参加者所感のまとめです。" },
    ],
    duration: "1日（約6時間）",
    capacity: "12名まで",
    price: "440,000円（税別）",
    relatedSlugs: ["vision", "management-os"],
  },

  // ────────────────────────────────────────
  // 事業管理OS
  // ────────────────────────────────────────
  {
    id: "management-os",
    slug: "management-os",
    order: 7,
    category: "biz-os",
    categoryLabel: "事業管理OS",
    title: "事業管理OS研修",
    subtitle: "顧客・案件・情報・期限・役割を整え、属人化を解消する",
    summary:
      "顧客、案件、資料、期限、役割を整理し、抜け漏れや属人化を防ぐ管理構造を学びます。管理表はあるが判断や改善に使われない、という状態を解消します。",
    challengeTags: ["management"],
    suitableFor: [
      "顧客や案件の管理が担当者任せになっている",
      "管理表はあるが、判断や改善に使われていない",
      "情報と判断が整理されていないチーム",
    ],
    notSuitableFor: [
      "Google DriveやITシステムそのものの構築を依頼したい（IT Service Labにて対応可）",
      "人事評価や賃金制度の設計を依頼したい",
    ],
    outcomes: [
      "顧客・案件・情報の整理基準を作れる",
      "週次レビューと役割・期限の管理方法を設計できる",
      "管理の正しい構造を理解できる",
    ],
    goals: [
      "管理の正しい構造を理解する",
      "顧客・案件・情報の整理基準をつくる",
      "週次・業務レビューの仕組みを設計する",
    ],
    curriculum: [
      { title: "事業管理OSの全体構造", description: "顧客・案件・情報・役割・期限の管理体系を理解します。" },
      { title: "顧客・案件の整理基準", description: "顧客と案件の分類・命名・保管の基準を設計します。" },
      { title: "情報の正本と集約", description: "どの情報をどこに集約するかの基準をつくります。" },
      { title: "優先順位・役割・期限の設計", description: "誰が何をいつまでに行うかを明確にします。" },
      { title: "週次レビュー演習", description: "週次で状況を確認・修正するレビューの型を演習します。" },
    ],
    deliverables: [
      { title: "案件管理フォーマット", description: "顧客・案件・進捗を管理する基本フォーマットです。" },
      { title: "週次レビュー設計書", description: "週次でチームが確認・判断するレビューの設計書です。" },
      { title: "役割・責任整理表", description: "誰が何を担当するかを整理した一覧表です。" },
    ],
    duration: "3時間",
    capacity: "12名まで",
    price: "275,000円（税別）",
    relatedSlugs: ["manager"],
  },
];

// ────────────────────────────────────────
// 定着支援（オプション）
// ────────────────────────────────────────
export type RetentionOption = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  contents: string[];
  duration: string;
  price: string;
};

export const retentionOptions: RetentionOption[] = [
  {
    id: "30-days",
    slug: "30-days",
    title: "30日実践フォロー",
    subtitle: "研修直後の初期行動を確実にする追加オプション",
    description:
      "研修後の最初の30日間で行動計画を実践し、初期段階のつまずきを確認・修正する追加オプションです。主要研修への組み合わせで申し込みます。",
    contents: ["30日行動計画の設計", "管理者による中間確認", "30日後レビュー（90分）", "簡易定着レポート"],
    duration: "30日間",
    price: "研修費＋165,000〜220,000円（税別）",
  },
  {
    id: "90-days",
    slug: "90-days",
    title: "90日定着プログラム",
    subtitle: "研修後も変化が続く。30・60・90日のフォローで行動を仕組みへ変える",
    description:
      "研修、30日・60日・90日のレビュー、管理責任者面談、定着レポートを含む包括的な定着プログラムです。研修を実施しても現場へ定着しないという課題に対応します。",
    contents: [
      "対象研修1回",
      "事前ヒアリング・研修設計（60分）",
      "30日・60日レビュー（各90分）",
      "90日レビュー（120分）",
      "管理責任者面談2回",
      "受講者ワークブック",
      "期間中のメール質問対応",
      "90日定着レポート",
      "次期改善提案",
    ],
    duration: "90日間 / 個別設計",
    price: "990,000円〜（税別）",
  },
];

// カテゴリ定義
export const categories = [
  { id: "intro",    label: "はじめての方",  challengeKey: "lhmp-overview" },
  { id: "life-os",  label: "人生OS",        challengeKey: "ideal-unclear" },
  { id: "org-os",   label: "人・組織OS",    challengeKey: "initiative" },
  { id: "biz-os",   label: "事業管理OS",    challengeKey: "management" },
];

// 課題カード定義
export const challengeCards = [
  {
    id: "lhmp-overview",
    title: "まずLHMPの全体像を社内で共有したい",
    note: "まず小さく導入し、社内の反応を確かめたい企業向け。",
    targetSlug: "lhmp-intro",
    targetLabel: "LHMP入門研修",
  },
  {
    id: "ideal-unclear",
    title: "社員が自分の理想や働く意味を言葉にできない",
    note: "理想の言語化に絞る場合は理想形成ワークショップ、判断・時間・仕事まで包括的に扱う場合は人生OS研修。",
    targetSlug: "life-os-workshop",
    targetLabel: "理想形成WS / 人生OS研修",
  },
  {
    id: "initiative",
    title: "社員が指示待ちで、自分から動かない",
    note: "個人の理想と会社での役割をつなぎ、自ら行動を選ぶ基準をつくる。",
    targetSlug: "agency",
    targetLabel: "主体性開発研修",
  },
  {
    id: "vision",
    title: "理念やMVVが行動へつながっていない",
    note: "会社の理念を説明するだけでなく、社員自身の価値観・役割・具体的行動へ接続する。",
    targetSlug: "vision",
    targetLabel: "個人・法人ビジョン接続研修",
  },
  {
    id: "manager",
    title: "管理職が仕事を抱え込み、部下を育てられない",
    note: "判断、任せ方、対話、育成、1on1の設計を扱う。",
    targetSlug: "manager",
    targetLabel: "管理者・管理職研修",
  },
  {
    id: "management",
    title: "顧客・案件・情報・期限の管理が属人化している",
    note: "顧客、案件、資料、役割、期限、週次レビューの管理原則を学ぶ。",
    targetSlug: "management-os",
    targetLabel: "事業管理OS研修",
  },
];
