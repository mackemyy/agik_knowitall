class Combinations extends Phaser.Scene {
    constructor() {
        super("combination");
    }

    create() { 
        this.options_shapes1 = [
            {
              type: 'shape',
              name:'Red Rectangle',
              key:'rectangle1',
              position:[200,200],
              newPos:[950,600],
              size:0.1,
              newSize:0.25,
            },
            {
              type: 'shape',
              name:'Orange Rectangle',
              key:'rectangle3',
              position:[200,530],
              newPos:[950,600],
              size:0.1,
              newSize:0.25,
            },
            {
              type: 'shape',
              name:'Yellow Rectangle',
              key:'rectangle2',
              position:[210,820],
              newPos:[950,600],
              size:0.1,
              newSize:0.25,
            },
          
          ];
      
          this.options_shapes2 = [
            {
              type: 'shape',
              name:'Yellow Square',
              key:'square1',
              position:[200,200],
              newPos:[950,600],
              size:0.1,
              newSize:0.25,
            },
            {
              type: 'shape',
              name:'Orange Triangle',
              key:'triangle1',
              position:[200,530],
              newPos:[950,600],
              size:0.1,
              newSize:0.25,
            },
            
            {
              type: 'shape',
              name:'Red',
              key:'circle1',
              position:[200,800],
              newPos:[950,600],
              size:0.1,
              newSize:0.25,
            },
          ];

          this.options_text1 = [
            {
              type: 'text',
              name:'No Smoking Text',
              key:'noSmoking',
              position:[200,200],
              newPos:[950,600],
              size:0.1,
              newSize:0.25,
            },
            {
              type: 'text',
              name:'No Trespassing Text',
              key:'noTrespassing',
              position:[200,530],
              newPos:[950,600],
              size:0.1,
              newSize:0.25,
            },
            
            {
              type: 'text',
              name:'CCTV Warning Text',
              key:'cctvWarning',
              position:[200,800],
              newPos:[950,600],
              size:0.1,
              newSize:0.25,
            },
          ];

          this.options_text2 = [
            {
              type: 'text',
              name:'No Noon Break Text',
              key:'noNoonBreak',
              position:[200,200],
              newPos:[950,600],
              size:0.1,
              newSize:0.25,
            },
          ];

          this.options_vector1 = [
            {
              type: 'vector',
              name:'No Smoking Vector',
              key:'smoking',
              position:[200,200],
              newPos:[950,600],
              size:0.1,
              newSize:0.25,
            },
            {
              type: 'vector',
              name:'No Trespassing Vector',
              key:'trespassing',
              position:[200,530],
              newPos:[950,600],
              size:0.1,
              newSize:0.25,
            },
            
            {
              type: 'vector',
              name:'CCTV Warning Vector',
              key:'cctv',
              position:[200,800],
              newPos:[950,600],
              size:0.1,
              newSize:0.25,
            },
          ];

          this.options_vector2 = [
            {
              type: 'vector',
              name:'Clock Vector',
              key:'clock',
              position:[200,200],
              newPos:[950,600],
              size:0.1,
              newSize:0.25,
            },
          ];

          this.questions = [
            {
            text: 'Employees want to keep the air clean in this area. I want the signage to be inside a shape where opposite sides are equal.',
            answer_shape: 'Red Rectangle',
            answer_vector: 'No Smoking Vector',
            answer_text: 'No Smoking Text'
            },
            {
            text: 'I want a four-sided polygon sign (but not square) that warns people not to enter this place or area.',
            answer_shape: 'Orange Rectangle',
            answer_vector: 'No Trespassing Vector',
            answer_text: 'No Trespassing Text'
            },
            {
            text: 'I want a signage in a square shape that lets our customers know that we are available to cater to their needs any time within our working hours.',
            answer_shape: 'Yellow Rectangle',
            answer_vector: 'Clock Vector',
            answer_text: 'No Noon Break Text'
            },
            {
            text: 'A box-like logo that tells people that a closed-circuit cameras are in use for their own safety and crime prevention.',
            answer_shape: 'Yellow Square',
            answer_vector: 'CCTV Warning Vector',
            answer_text: 'CCTV Warning Text'
            },
          ];
    }


}