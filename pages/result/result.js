// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score: 0,quiz:'',choice:'', wquestion:'', choiceArr:[],
    explaination8: "您答对了超过八题，您有很强的保险意识",
    explaination5:"您答对了超过五题，您的保险意识不错",
    explaination3:"您答对了超过三题，您的保险意识还有待提高",
    explaination0:"您答对的题数少于三，请再接再厉"
  },
  
  onLoad: function (options) {
    if (options.score) {
      this.setData({
        score: options.score
      });
    }
    if (options.quiz) {
      this.setData({
        quiz: options.quiz
      });
    }
    if (options.choice) {
      this.setData({
        choice: options.choice
      });
    }
    let quiz = this.data.quiz;
    let choice = this.data.choice;
    let quizArr = []
    for(let i=0;i<20;i=i+2) {
      if (quiz[i]=="0") {
        quizArr.push(parseInt(quiz[i+1]));
      } else {
        quizArr.push(parseInt(quiz[i]+quiz[i+1]));
      }
    }
    let choiceArr = [];
    for(let j=0;j<10;j=j+1){
      if(choice[j]== '0'){
        choiceArr.push(quizArr[j]);
      }
    }
    this.setData({
      choiceArr: choiceArr
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  confirm: function () {
    this.setData({
      nameInput: this.data.name,
      phoneInput: this.data.phone,
    });
  },
  nameInput: function(e) {
    this.setData({
      name: e.detail.value
    });
  },
  phoneInput: function(e) {
    this.setData({
      phone: e.detail.value
    });
  },
  bindButtonConfirm: function() {
    let choiceArr = this.data.choiceArr;
    let str = '';
    for (let i=0;i<choiceArr.length;i++) {
      let k = choiceArr[i];
      str = str + question[k].quiz + '\n' + question[k].choice[0].value + '\n' + question[k].choice[1].value + '\n' + question[k].choice[2].value + '\n' + question[k].choice[3].value + '\n' + '正确答案为' + question[k].rightChoice + '\n\n';
    }
    this.setData({
      wquestion: str
    })
  }
})
let question = [
  {
    id: 1,
    quiz: "在保险理论与实务中，风险是指保险标的损失发生的", //问题
    choice: [ //选项
      { name: 'A', value: 'A. 不可能预测' },
      { name: 'B', value: 'B. 不确定性' },
      { name: 'C', value: 'C. 不可知性' },
      { name: 'D', value: 'D. 不可计量性' }
    ],
    rightChoice: 'B' //正确答案
  }, {
    id: 2,
    quiz: "某一标的本身所具有的足以引起风险事故发生或增加损失机会或加重损失程度的风险因素属于",
    choice: [
      { name: 'A', value: 'A. 无形风险因素' },
      { name: 'B', value: 'B. 心理风险因素' },
      { name: 'C', value: 'C. 道德风险因素' },
      { name: 'D', value: 'D. 实质风险因素' },
    ],
    rightChoice: 'D'
  }, {
    id: 3,
    quiz: "财务型保险转移风险是指单位或个人通过订立保险合同，将其面临的各种风险等转嫁给保险人的一种风险管理技术。这里所说的各种风险不包括",
    choice: [
      { name: 'A', value: 'A. 投机风险' },
      { name: 'B', value: 'B. 财产风险' },
      { name: 'C', value: 'C. 人生风险' },
      { name: 'D', value: 'D. 责任风险' }
    ],
    rightChoice: 'A'
  }, {
    id: 4,
    quiz: "最早发明风险分散这一原理的国家是",
    choice: [
      { name: 'A', value: 'A. 中国' },
      { name: 'B', value: 'B. 美国' },
      { name: 'C', value: 'C. 意大利' },
      { name: 'D', value: 'D. 英国' }
    ],
    rightChoice: 'A'
  }, {
    id: 5,
    quiz: "依法成立的保险合同条款对合同当事人产生的约束力的情况属于",
    choice: [
      { name: 'A', value: 'A. 保险合同成立' },
      { name: 'B', value: 'B. 保险合同生效' },
      { name: 'C', value: 'C. 保险合同中止' },
      { name: 'D', value: 'D. 保险合同续效' }
    ],
    rightChoice: 'B'
  }, {
    id: 6,
    quiz: "在我国保险实务中，普遍推行的“零时起保制”的含义之一是指保险合同生效的开始时间为",
    choice: [
      { name: 'A', value: 'A. 交付保费的当日零时' },
      { name: 'B', value: 'B. 交付保费的次日零时' },
      { name: 'C', value: 'C. 合同成立的当日零时' },
      { name: 'D', value: 'D. 合同成立的当日零时' }
    ],
    rightChoice: 'D'
  }, {
    id: 7,
    quiz: "保险事故发生时，被保险人有责任尽力采取必要的合理措施，进行损失的补救，防止或减少损失，这表明被保险人的",
    choice: [
      { name: 'A', value: 'A. 阻止施救的义务' },
      { name: 'B', value: 'B. 防灾防损的义务' },
      { name: 'C', value: 'C. 协助追偿的义务' },
      { name: 'D', value: 'D. 保证安全的义务' }
    ],
    rightChoice: 'A'
  }, {
    id: 8,
    quiz: "在保险合同各种终止原因中，最普通、最基本的保险合同终止原因是",
    choice: [
      { name: 'A', value: 'A. 因履行而终止' },
      { name: 'B', value: 'B. 因期限届满而终止' },
      { name: 'C', value: 'C. 因保险标的灭失而终止' },
      { name: 'D', value: 'D. 因死亡而终止' }
    ],
    rightChoice: 'B'
  }, {
    id: 9,
    quiz: "在解决保险合同纠纷中，保险双方当事人通过人民法院解决争端，进行裁决的办法被称为",
    choice: [
      { name: 'A', value: 'A. 协商' },
      { name: 'B', value: 'B. 调解' },
      { name: 'C', value: 'C. 仲裁' },
      { name: 'D', value: 'D. 诉讼' }
    ],
    rightChoice: 'D'
  }, {
    id: 10,
    quiz: "禁止反言的含义是：",
    choice: [
      {
        name: 'A', value: 'A. 保险合同一旦成立，保险人无权更改合同内容'
      },
      { name: 'B', value: 'B. 保险合同一理成立，投保人无权更改合同内容' },
      { name: 'C', value: 'C. 保险合同一方若已放弃他在合同中某种权利，将来不得再向他方主张这种权利' },
      { name: 'D', value: 'D. 保险人和投保人若告知的内容不真实，保险合同无效' }
    ],
    rightChoice: 'C'
  }, {
    id: 11,
    quiz: "在财产保险中，被保险人未按保险合同约定，将财产保险的保险标的危险显著增加的情况及时通知保险人，对因保险标的危险程度显著增加而发生的保险事故，保险人",
    choice: [
      { name: 'A', value: 'A. 承担赔偿保险金的责任' },
      { name: 'B', value: 'B. 承担赔偿保险金的责任，但投保人必须补缴保费' },
      { name: 'C', value: 'C. 不承担赔偿保险金的责任' },
      { name: 'D', value: 'D. 只承担赔偿原承保危险程度相应比例的保险金的责任' }
    ],
    rightChoice: 'C'
  }, {
    id: 12,
    quiz: "如果保险人在订立合同时未履行责任免除条款的明确说明义务，则",
    choice: [
      { name: 'A', value: 'A. 保险人与被保险人共同承担损失责任' },
      { name: 'B', value: 'B. 该责任免除条款无效' },
      { name: 'C', value: 'C. 该责任免除条款仍然有效，但需退还部分保费' },
      { name: 'D', value: 'D. 该保险合同无效' }
    ],
    rightChoice: 'B'
  }, {
    id: 13,
    quiz: "某企业投保了财产保险综合险，因水灾造成一栋厂房毁损，已知该栋房屋的市场价值为60万元，保险金额为50万元。则被保险人可得到的赔款金额为",
    choice: [
      { name: 'A', value: 'A. 50万' },
      { name: 'B', value: 'B. 60万' },
      { name: 'C', value: 'C. 55万' },
      { name: 'D', value: 'D. 45万' },
    ],
    rightChoice: 'A'
  }, {
    id: 14,
    quiz: "根据损失补偿原则，如果发生事故后，被保险人已经从第三者责任方取得损失的全部赔偿，则",
    choice: [
      { name: 'A', value: 'A. 保险人与第三者共同分担损失' },
      { name: 'B', value: 'B. 保险人可以扣减相应的保险金' },
      { name: 'C', value: 'C. 第三者有权向保险公司求偿' },
      { name: 'D', value: 'D. 保险人不再承担保险赔偿责任' }
    ],
    rightChoice: 'B'
  }, {
    id: 15,
    quiz: "保险人行使代位求偿权的权限只能限制在",
    choice: [
      { name: 'A', value: 'A. 保险金额' },
      { name: 'B', value: 'B. 保赔偿金额' },
      { name: 'C', value: 'C. 保险利益' },
      { name: 'D', value: 'D. 实际损失' }
    ],
    rightChoice: 'B'
  }, {
    id: 16,
    quiz: "若被保险人的家庭成员或者其组成人员故意制造保险事故造成保险标的损失，那么",
    choice: [
      {
        name: 'A', value: 'A. 保险人不得行使代位请求赔偿的权利'
      },
      { name: 'B', value: 'B. 保险人同样行使代位请求赔偿的权利' },
      { name: 'C', value: 'C. 保险人不再行使代位请求赔偿的权利' },
      { name: 'D', value: 'D. 保险人不能行使代位请求赔偿的权利' }
    ],
    rightChoice: 'B'
  }, {
    id: 17,
    quiz: "在我国，重复保险一般采用分摊方法是",
    choice: [
      { name: 'A', value: 'A. 限额责任制' },
      { name: 'B', value: 'B. 保比例责任制' },
      { name: 'C', value: 'C. 顺序责任制' },
      { name: 'D', value: 'D. 求偿责任制' }
    ],
    rightChoice: 'B'
  }, {
    id: 18,
    quiz: "暴风引起电线杆倒塌，电线短路引起火花，火花引燃房屋导致财产损失，该损失事件的近因是",
    choice: [
      { name: 'A', value: 'A. 暴风' },
      { name: 'B', value: 'B. 电线杆倒塌' },
      { name: 'C', value: 'C. 火花' },
      { name: 'D', value: 'D. 房屋燃烧' }
    ],
    rightChoice: 'A'
  }, {
    id: 19,
    quiz: "协助投保人设计保险方案时，应遵循的首要原则是",
    choice: [
      { name: 'A', value: 'A. 高额损失优先原则' },
      { name: 'B', value: 'B. 客户满意度最大原则' },
      { name: 'C', value: 'C. 利润最大化原则' },
      { name: 'D', value: 'D. 力求全面原则' }
    ],
    rightChoice: 'A'
  }, {
    id: 20,
    quiz: "基于投保人的利益，为投保人与保险人订立保险合同提供中介服务，并依法收取佣金的单位称为",
    choice: [
      { name: 'A', value: 'A. 再保险人' },
      { name: 'B', value: 'B. 保险中介人' },
      { name: 'C', value: 'C. 保险代理人' },
      { name: 'D', value: 'D. 保险经纪人' }
    ],
    rightChoice: 'D'
  }, {
    id: 21,
    quiz: "保险人对愿意购买保险的单位或个人（即投保人）所提出的投保申请进行审核，作出是否同意接受和如何接受的决定的过程称为",
    choice: [
      { name: 'A', value: 'A. 保险核查' },
      { name: 'B', value: 'B. 保险审核' },
      { name: 'C', value: 'C. 保险承保' },
      { name: 'D', value: 'D. 保险核赔' }
    ],
    rightChoice: 'C'
  }, {
    id: 22,
    quiz: "保险人在保险标的发生风险事故后，对被保险人提出的索赔要求进行处理的行为被称为",
    choice: [
      { name: 'A', value: 'A. 保险核查' },
      { name: 'B', value: 'B. 保险审核' },
      { name: 'C', value: 'C. 保险承保' },
      { name: 'D', value: 'D. 保险核赔' },
    ],
    rightChoice: 'C'
  }, {
    id: 23,
    quiz: "所有从业人员在执业活动中应该遵循的行为守则被称为",
    choice: [
      { name: 'A', value: 'A. 职业道德' },
      { name: 'B', value: 'B. 行为规范' },
      { name: 'C', value: 'C. 执业准则' },
      { name: 'D', value: 'D. 职业规范' },
    ],
    rightChoice: 'A'
  }, {
    id: 24,
    quiz: "财产保险合同的被保险人自其知道或应当知道保险事故发生之日起，年内不行使向保险人请求赔偿的权利，则投保人或被保险人的索赔权利即因自动放弃而失效。",
    choice: [
      { name: 'A', value: 'A. 5年' },
      { name: 'B', value: 'B. 3年' },
      { name: 'C', value: 'C. 2年' },
      { name: 'D', value: 'D. 1年' },
    ],
    rightChoice: 'C'
  }, {
    id: 25,
    quiz: "与财产保险相比，机动车辆保险特有的制度是",
    choice: [
      { name: 'A', value: 'A. 无赔款优待' },
      { name: 'B', value: 'B. 重复保险' },
      { name: 'C', value: 'C. 定值保险' },
      { name: 'D', value: 'D. 不定值保险' },
    ],
    rightChoice: 'A'
  }, {
    id: 26,
    quiz: "建筑工程险的被保险人有",
    choice: [
      { name: 'A', value: 'A. 业主.承包人' },
      { name: 'B', value: 'B. 业主.分承包人' },
      { name: 'C', value: 'C. 承包人.非承包人' },
      { name: 'D', value: 'D. 业主.承包人.分承包人.技术顾问及其他关系方' },
    ],
    rightChoice: 'D'
  }, {
    id: 27,
    quiz: "一般而言，责任保险承保的民事责任主要是",
    choice: [
      { name: 'A', value: 'A. 侵权责任' },
      { name: 'B', value: 'B. 违约责任' },
      { name: 'C', value: 'C. 无过失责任' },
      { name: 'D', value: 'D. 过失责任' }
    ],
    rightChoice: 'A'
  }, {
    id: 28,
    quiz: "承保雇主对所雇员在受雇期间，因发生意外事故或因职业病而造成人身伤残死亡时依法应承担的经济赔偿责任的保险属于",
    choice: [
      { name: 'A', value: 'A. 产品责任保险' },
      { name: 'B', value: 'B. 职业责任保险' },
      { name: 'C', value: 'C. 雇主责任保险' },
      { name: 'D', value: 'D. 公众责任保险' }
    ],
    rightChoice: 'C'
  }, {
    id: 29,
    quiz: "保险人对愿意购买保险的单位或个人（即投保人）所提出的投保申请进行审核，作出是否同意接受和如何接受的决定的过程称为",
    choice: [
      { name: 'A', value: 'A. 保险核查' },
      { name: 'B', value: 'B. 保险审核' },
      { name: 'C', value: 'C. 保险承保' },
      { name: 'D', value: 'D. 保险核赔' }
    ],
    rightChoice: 'C'
  }, {
    id: 30,
    quiz: "承保被保险人在固定场所进行生产.经营或其它活动时，因发生意外事故而造成的他人财产损失或人身伤亡，依法应由被保险人承担的经济赔偿责任的保险是",
    choice: [
      { name: 'A', value: 'A. 职业责任保险' },
      { name: 'B', value: 'B. 雇主责任保险' },
      { name: 'C', value: 'C. 产品责任保险' },
      { name: 'D', value: 'D. 公众责任保险' }
    ],
    rightChoice: 'D'
  }
]