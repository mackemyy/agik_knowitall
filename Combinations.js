class Combinations extends Phaser.Scene {
  constructor() {
      super("combination");

    //GOVERNMENT CATEGORY
    this.options_shapes = [
      {
        type: 'shape',
        name:'Red Rectangle',
        key:'rectangle1',
        x: 200, y: 200,
        newPos:[-520, 500],
        size:0.1,
        newSize:0.23,
      },
      {
        type: 'shape',
        name:'Orange Rectangle',
        key:'rectangle3',
        x: 200, y: 530,
        newPos:[-520, 500],
        size:0.1,
        newSize:0.23,
      },
      {
        type: 'shape',
        name:'Yellow Rectangle',
        key:'rectangle2',
        x: 210, y: 820,
        newPos:[-520, 500],
        size:0.1,
        newSize:0.23,
      },

      {
          type: 'shape',
          name:'Yellow Square',
          key:'square1',
          x: 200, y: 200,
          newPos:[-520, 500],
          size:0.1,
          newSize:0.23,
        },
        {
          type: 'shape',
          name:'Orange Triangle',
          key:'triangle1',
          x: 200, y: 530,
          newPos:[-520, 500],
          size:0.1,
          newSize:0.23,
        },
        {
          type: 'shape',
          name:'Red Circle',
          key:'circle1',
          x: 210, y: 820,
          newPos:[-520, 500],
          size:0.1,
          newSize:0.23,
        },
  ];

  this.options_text = [
      {
        type: 'text',
        name:'CCTV Warning',
        key:'cctvWarning',
        x: 200, y:150,
        newPos:[-520, 620],
        size:0.13,
        newSize:0.23,

      },
      {
        type: 'text',
        name:'No Noon Break',
        key:'noNoonBreak',
        x: 210, y: 390,
        newPos:[-680, 500],
        size:0.13,
        newSize:0.2,

      },
      {
        type: 'text',
        name:'No Smoking',
        key:'noSmoking',
        x: 200, y: 615,
        newPos:[-520, 280],
        size:0.13,
        newSize:0.2,
      },
      {
        type: 'text',
        name:'No Trespassing',
        key:'noTrespassing',
        x: 200, y: 840,
        newPos:[-520, 700],
        size:0.13,
        newSize:0.2,
      },
    
    ];

    this.options_icon = [
      {
        type: 'icon',
        name:'cctv icon',
        key:'cctv',
        x: 210, y:150,
        newPos:[-520, 420],
        size:0.15,
        newSize:0.28,

      },
      {
        type: 'icon',
        name:'clock icon',
        key:'clock',
        x: 210, y: 360,
        newPos:[-370, 500],
        size:0.15,
        newSize:0.2,

      },
      {
        type: 'icon',
        name:'smoking icon',
        key:'smoking',
        x: 220, y: 595,
        newPos:[-520, 600],
        size:0.1,
        newSize:0.20,
      },
      {
        type: 'icon',
        name:'tresspassing icon',
        key:'trespassing',
        x: 220, y: 830,
        newPos:[-520, 500],
        size:0.1,
        newSize:0.20,
      },
    
    ];

    this.questions = [
      {
      text: 'Employees want to keep the air clean in this area. I want the signage to be inside a shape where opposite sides are equal.',
      answer_shape: 'Red Rectangle',
      answer_vector: 'smoking icon',
      answer_text: 'No Smoking'
      },
      {
      text: 'I want a four-sided polygon sign (but not square) that warns people not to enter this place or area.',
      answer_shape: 'Orange Rectangle',
      answer_vector: 'tresspassing icon',
      answer_text: 'No Trespassing'
      },
      {
      text: 'I want a signage in a square shape that lets our customers know that we are available to cater to their needs any time within our working hours.',
      answer_shape: 'Yellow Rectangle',
      answer_vector: 'clock icon',
      answer_text: 'No Noon Break'
      },
      {
      text: 'A box-like logo that tells people that a closed-circuit cameras are in use for their own safety and crime prevention.',
      answer_shape: 'Yellow Square',
      answer_vector: 'cctv icon',
      answer_text: 'CCTV Warning'
      },
    ];

  
    //EDUCATION CATEGORY

    this.options_shapes2 = [
      {
        type: 'shape',
        name:'',
        key:'',
        x: 200, y: 200,
        newPos:[-520, 500],
        size:0.1,
        newSize:0.23,
      },
      {
        type: 'shape',
        name:'',
        key:'',
        x: 200, y: 530,
        newPos:[-520, 500],
        size:0.1,
        newSize:0.23,
      },
      {
        type: 'shape',
        name:'',
        key:'',
        x: 210, y: 820,
        newPos:[-520, 500],
        size:0.1,
        newSize:0.23,
      },

      {
          type: 'shape',
          name:'',
          key:'',
          x: 200, y: 200,
          newPos:[-520, 500],
          size:0.1,
          newSize:0.23,
        },
        {
          type: 'shape',
          name:'',
          key:'',
          x: 200, y: 530,
          newPos:[-520, 500],
          size:0.1,
          newSize:0.23,
        },
        {
          type: 'shape',
          name:'',
          key:'',
          x: 210, y: 820,
          newPos:[-520, 500],
          size:0.1,
          newSize:0.23,
        },
  ];

  this.options_text2 = [
      {
        type: 'text',
        name:'',
        key:'',
        x: 200, y:150,
        newPos:[-520, 620],
        size:0.13,
        newSize:0.23,

      },
      {
        type: 'text',
        name:'',
        key:'',
        x: 210, y: 390,
        newPos:[-680, 500],
        size:0.13,
        newSize:0.2,

      },
      {
        type: 'text',
        name:'',
        key:'',
        x: 200, y: 615,
        newPos:[-520, 280],
        size:0.13,
        newSize:0.2,
      },
      {
        type: 'text',
        name:'',
        key:'',
        x: 200, y: 840,
        newPos:[-520, 700],
        size:0.13,
        newSize:0.2,
      },
    
    ];

    this.options_icon2 = [
      {
        type: 'icon',
        name:'',
        key:'',
        x: 210, y:150,
        newPos:[-520, 420],
        size:0.15,
        newSize:0.28,

      },
      {
        type: 'icon',
        name:'',
        key:'',
        x: 210, y: 360,
        newPos:[-370, 500],
        size:0.15,
        newSize:0.2,

      },
      {
        type: 'icon',
        name:' ',
        key:'',
        x: 220, y: 595,
        newPos:[-520, 600],
        size:0.1,
        newSize:0.20,
      },
      {
        type: 'icon',
        name:'',
        key:'',
        x: 220, y: 830,
        newPos:[-520, 500],
        size:0.1,
        newSize:0.20,
      },
    
    ];

    this.questions2 = [
      {
      text: 'I want a three-angle shaped logo for our school that indicates safety zone for kids.',
      answer_shape: 'Triangle',
      answer_vector: 'Children',
      answer_text: 'Children Zone'
      },
      {
      text: 'Our students tends to forget it is not allowed to be noisy in the library. I want a square-shaped logo that reminds them of that.',
      answer_shape: 'Square',
      answer_vector: 'Quiet Sign',
      answer_text: 'Keep Quiet'
      },
      {
      text: 'I want a four-sided signage that tell students that they are only allowed to walk in this hallway.',
      answer_shape: ['Square', 'Rectangle'],
      answer_vector: 'Man Running',
      answer_text: 'No Running'
      },
      {
      text: 'Sphere-like logo that raises awareness to stop intimidating weaker kids.',
      answer_shape: 'Circle',
      answer_vector: 'Hand',
      answer_text: 'Stop Bullying'
      },
    ];

    this.options_shapes2 = [
      {
        type: 'shape',
        name:'',
        key:'',
        x: 200, y: 200,
        newPos:[-520, 500],
        size:0.1,
        newSize:0.23,
      },
      {
        type: 'shape',
        name:'',
        key:'',
        x: 200, y: 530,
        newPos:[-520, 500],
        size:0.1,
        newSize:0.23,
      },
      {
        type: 'shape',
        name:'',
        key:'',
        x: 210, y: 820,
        newPos:[-520, 500],
        size:0.1,
        newSize:0.23,
      },

      {
          type: 'shape',
          name:'',
          key:'',
          x: 200, y: 200,
          newPos:[-520, 500],
          size:0.1,
          newSize:0.23,
        },
        {
          type: 'shape',
          name:'',
          key:'',
          x: 200, y: 530,
          newPos:[-520, 500],
          size:0.1,
          newSize:0.23,
        },
        {
          type: 'shape',
          name:'',
          key:'',
          x: 210, y: 820,
          newPos:[-520, 500],
          size:0.1,
          newSize:0.23,
        },
      ];

      //BUSINESS CATEGORY
      this.options_text3 = [
        {
          type: 'text',
          name:'',
          key:'',
          x: 200, y:150,
          newPos:[-520, 620],
          size:0.13,
          newSize:0.23,

        },
        {
          type: 'text',
          name:'',
          key:'',
          x: 210, y: 390,
          newPos:[-680, 500],
          size:0.13,
          newSize:0.2,

        },
        {
          type: 'text',
          name:'',
          key:'',
          x: 200, y: 615,
          newPos:[-520, 280],
          size:0.13,
          newSize:0.2,
        },
        {
          type: 'text',
          name:'',
          key:'',
          x: 200, y: 840,
          newPos:[-520, 700],
          size:0.13,
          newSize:0.2,
        },
      
      ];

      this.options_icon3 = [
        {
          type: 'icon',
          name:'',
          key:'',
          x: 210, y:150,
          newPos:[-520, 420],
          size:0.15,
          newSize:0.28,

        },
        {
          type: 'icon',
          name:'',
          key:'',
          x: 210, y: 360,
          newPos:[-370, 500],
          size:0.15,
          newSize:0.2,

        },
        {
          type: 'icon',
          name:' ',
          key:'',
          x: 220, y: 595,
          newPos:[-520, 600],
          size:0.1,
          newSize:0.20,
        },
        {
          type: 'icon',
          name:'',
          key:'',
          x: 220, y: 830,
          newPos:[-520, 500],
          size:0.1,
          newSize:0.20,
        },
      
      ];

      this.questions3 = [
        {
        text: 'I will start cooking patties for my customers soon. I want a logo inside a shape with no corners.',
        answer_shape: 'Circle',
        answer_vector: 'Burger',
        answer_text: 'Burger Place'
        },
        {
        text: 'Nowadays, alot of people wants a food with lots of toppings - tomato, mushroom, cheese, etc. I want any-shaped logo except triangle',
        answer_shape: ['Square','Rectangle', 'Circle'],
        answer_vector: 'Pizza',
        answer_text: 'Pizza Place'
        },
        {
        text: 'My store will be selling purified water to our customer soon. Can you make me a logo for my business?',
        answer_shape: ['Square', 'Rectangle', 'Circle'],
        answer_vector: 'Water Bottle',
        answer_text: 'Water Station'
        },
        {
        text: 'I want a logo for our store which sells fashionable clothes and accessories. Any shape will do but I would really be happy with a four equal-sided shape.',
        answer_shape: 'Square',
        answer_vector: 'Dress',
        answer_text: 'Boutique Shop'
        },
        {text: 'Our soon-to-open company will provide the widest range of branded and generic medecines',
        answer_shape: ['Square', 'Rectangle', 'Circle'],
        answer_vector: 'Medicine Pill',
        answer_text: 'Pharmacy',
        }

      ];

  }
}