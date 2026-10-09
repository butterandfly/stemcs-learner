import { Module } from '../types';

export const CURRICULUM: Module[] = [
  {
    id: 'scratch',
    name: 'Scratch 积木王国',
    tagline: '逻辑积木 · 动感舞台',
    icon: 'Cat',
    color: '#FFAB19',
    isLocked: false,
    sections: [
      {
        id: 'sec-1',
        title: '第 1 部份：动起来与第一条指令',
        description: '掌握事件触发与小猫的基础运动',
        units: [
          {
            id: 'unit-1',
            unitNumber: 1,
            title: '第 1 单元：绿旗与第一次移动',
            badge: '起步先锋',
            summary: '认识 Scratch 积木结构，让小猫迈出编程第一步',
            nodes: [
              {
                id: 'node-1-1',
                title: '启动魔法',
                shortDesc: '程序的起跑信号',
                icon: 'Flag',
                xp: 20,
                questions: [
                  {
                    id: 'q-1-1-1',
                    type: 'select_one',
                    prompt: '找出能让程序启动的「起跑帽」积木',
                    subtext: '所有 Scratch 脚本都需要一个起始事件',
                    options: [
                      {
                        id: 'opt-flag',
                        text: '当 绿旗 被点击',
                        isCorrect: true,
                        block: {
                          id: 'b-flag-demo',
                          category: 'events',
                          label: '当 绿旗 被点击',
                          shape: 'hat'
                        }
                      },
                      {
                        id: 'opt-move',
                        text: '移动 10 步',
                        isCorrect: false,
                        block: {
                          id: 'b-move-demo',
                          category: 'motion',
                          label: '移动 10 步',
                          shape: 'stack'
                        }
                      },
                      {
                        id: 'opt-say',
                        text: '说 "你好" 2秒',
                        isCorrect: false,
                        block: {
                          id: 'b-say-demo',
                          category: 'looks',
                          label: '说 "你好" 2秒',
                          shape: 'stack'
                        }
                      }
                    ],
                    stageConfig: {
                      initialX: -100,
                      initialY: 0,
                      actionType: 'say',
                      speechText: '我在等绿旗指令！'
                    },
                    successMessage: '正确！圆形凸起是「帽子积木」，它是程序的开端。'
                  },
                  {
                    id: 'q-1-1-2',
                    type: 'predict_output',
                    prompt: '如果不放「绿旗」积木，点击绿旗小猫会怎样？',
                    options: [
                      {
                        id: 'opt-idle',
                        text: '原地不动，因为没有接收到触发指令',
                        isCorrect: true
                      },
                      {
                        id: 'opt-auto',
                        text: '会自动跑起来',
                        isCorrect: false
                      }
                    ],
                    stageConfig: {
                      initialX: 0,
                      initialY: 0,
                      actionType: 'say',
                      speechText: '没有事件，我不知道该做什么~'
                    },
                    successMessage: '极客法则：计算机只执行被明确触发的指令。'
                  }
                ]
              },
              {
                id: 'node-1-2',
                title: '迈出第一步',
                shortDesc: '拼合积木并移动',
                icon: 'Footprints',
                xp: 25,
                questions: [
                  {
                    id: 'q-1-2-1',
                    type: 'block_assemble',
                    prompt: '按照先后顺序拼好积木，让小猫前进',
                    subtext: '先放起跑帽，再卡入运动积木',
                    availableBlocks: [
                      {
                        id: 'b_flag',
                        category: 'events',
                        label: '当 绿旗 被点击',
                        shape: 'hat'
                      },
                      {
                        id: 'b_move10',
                        category: 'motion',
                        label: '移动 10 步',
                        shape: 'stack'
                      },
                      {
                        id: 'b_wrong',
                        category: 'sound',
                        label: '播放声音 喵',
                        shape: 'stack'
                      }
                    ],
                    correctBlockSequence: ['b_flag', 'b_move10'],
                    stageConfig: {
                      initialX: -60,
                      initialY: 0,
                      targetX: -10,
                      actionType: 'move',
                      actionValue: 50
                    },
                    successMessage: '咔哒！积木咬合，小猫向前迈出第一步！'
                  },
                  {
                    id: 'q-1-2-2',
                    type: 'select_one',
                    prompt: '在 Scratch 中，控制「位置和移动」的积木是什么颜色？',
                    options: [
                      {
                        id: 'opt-blue',
                        text: '蓝色 (运动分类)',
                        isCorrect: true
                      },
                      {
                        id: 'opt-yellow',
                        text: '黄色 (事件分类)',
                        isCorrect: false
                      },
                      {
                        id: 'opt-purple',
                        text: '紫色 (外观分类)',
                        isCorrect: false
                      }
                    ],
                    successMessage: '漂亮！蓝色对应运动，颜色是积木的分类密码。'
                  }
                ]
              },
              {
                id: 'node-1-3',
                title: '数值与距离',
                shortDesc: '调整步数与方向',
                icon: 'Gauge',
                xp: 30,
                questions: [
                  {
                    id: 'q-1-3-1',
                    type: 'parameter_tune',
                    prompt: '想要小猫走到右侧的水晶能量站，选择哪个积木？',
                    subtext: '距离测量显示：大约需要前进 60 步',
                    options: [
                      {
                        id: 'opt-p10',
                        text: '移动 10 步',
                        isCorrect: false,
                        block: {
                          id: 'b-m10',
                          category: 'motion',
                          label: '移动 10 步',
                          shape: 'stack'
                        }
                      },
                      {
                        id: 'opt-p60',
                        text: '移动 60 步',
                        isCorrect: true,
                        block: {
                          id: 'b-m60',
                          category: 'motion',
                          label: '移动 60 步',
                          shape: 'stack'
                        }
                      },
                      {
                        id: 'opt-p0',
                        text: '移动 0 步',
                        isCorrect: false,
                        block: {
                          id: 'b-m0',
                          category: 'motion',
                          label: '移动 0 步',
                          shape: 'stack'
                        }
                      }
                    ],
                    stageConfig: {
                      initialX: -80,
                      initialY: 0,
                      targetX: 40,
                      actionType: 'move',
                      actionValue: 120
                    },
                    successMessage: '充能成功！步数参数越大，位移距离越大。'
                  },
                  {
                    id: 'q-1-3-2',
                    type: 'predict_output',
                    prompt: '如果把步数写成「-10」(负数)，小猫会怎么走？',
                    options: [
                      {
                        id: 'opt-back',
                        text: '向相反方向（后退）走 10 步',
                        isCorrect: true
                      },
                      {
                        id: 'opt-jump',
                        text: '向上跳高 10 步',
                        isCorrect: false
                      },
                      {
                        id: 'opt-vanish',
                        text: '直接消失',
                        isCorrect: false
                      }
                    ],
                    stageConfig: {
                      initialX: 20,
                      initialY: 0,
                      actionType: 'say',
                      speechText: '负数让我倒着走！'
                    },
                    successMessage: '极客思维达成！在坐标轴上，负号代表反向。'
                  }
                ]
              },
              {
                id: 'node-1-4',
                title: '单元大挑战：小猫亮相',
                shortDesc: '移动并发出问候',
                icon: 'Award',
                xp: 40,
                questions: [
                  {
                    id: 'q-1-4-1',
                    type: 'block_assemble',
                    prompt: '按顺序拼装：小猫起步前进，然后打招呼！',
                    subtext: '点击积木放入轨道',
                    availableBlocks: [
                      {
                        id: 'b_flag_final',
                        category: 'events',
                        label: '当 绿旗 被点击',
                        shape: 'hat'
                      },
                      {
                        id: 'b_move_final',
                        category: 'motion',
                        label: '移动 40 步',
                        shape: 'stack'
                      },
                      {
                        id: 'b_say_final',
                        category: 'looks',
                        label: '说 "STEM 真酷！" 2秒',
                        shape: 'stack'
                      }
                    ],
                    correctBlockSequence: ['b_flag_final', 'b_move_final', 'b_say_final'],
                    stageConfig: {
                      initialX: -70,
                      initialY: 0,
                      targetX: 10,
                      actionType: 'say',
                      speechText: 'STEM 真酷！',
                      actionValue: 80
                    },
                    successMessage: '太棒了！你已经完成了第一个完整的 Scratch 脚本！'
                  }
                ]
              }
            ]
          },
          {
            id: 'unit-2',
            unitNumber: 2,
            title: '第 2 单元：转向与 X/Y 坐标秘密',
            badge: '空间向导',
            summary: '掌握角度旋转与舞台直角坐标系',
            nodes: [
              {
                id: 'node-2-1',
                title: '向右转一转',
                shortDesc: '角度与方向积木',
                icon: 'RotateCw',
                xp: 25,
                questions: []
              },
              {
                id: 'node-2-2',
                title: '探秘 X 轴与 Y 轴',
                shortDesc: '舞台上的坐标网格',
                icon: 'Compass',
                xp: 30,
                questions: []
              }
            ]
          },
          {
            id: 'unit-3',
            unitNumber: 3,
            title: '第 3 单元：造型切换与走步动画',
            badge: '动画大师',
            summary: '利用下一个造型积木制作生动走路效果',
            nodes: [
              {
                id: 'node-3-1',
                title: '换个姿势',
                shortDesc: '造型 1 与造型 2',
                icon: 'Sparkles',
                xp: 30,
                questions: []
              }
            ]
          }
        ]
      },
      {
        id: 'sec-2',
        title: '第 2 部份：循环循环再循环',
        description: '让计算机自动重复执行动作，掌握无限与有限循环',
        units: [
          {
            id: 'unit-4',
            unitNumber: 4,
            title: '第 4 单元：重复执行积木',
            badge: '齿轮运转',
            summary: 'C 型积木的包裹奥秘',
            nodes: []
          }
        ]
      }
    ]
  },
  {
    id: 'python',
    name: 'Python 终端极客',
    tagline: '文本代码 · 算法探险',
    icon: 'Terminal',
    color: '#00E5FF',
    isLocked: true,
    sections: []
  },
  {
    id: 'hardware',
    name: '硬件与机器人',
    tagline: '电路脉冲 · 传感互联',
    icon: 'Cpu',
    color: '#00E676',
    isLocked: true,
    sections: []
  }
];
