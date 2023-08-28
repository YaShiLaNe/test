System.register("chunks:///_virtual/CameraRotate.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Camera, RichText, Vec3, input, Input, v2, Vec2, clamp, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Camera = module.Camera;
      RichText = module.RichText;
      Vec3 = module.Vec3;
      input = module.input;
      Input = module.Input;
      v2 = module.v2;
      Vec2 = module.Vec2;
      clamp = module.clamp;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "892d0F7L7VJLoYqJ/x88u57", "CameraRotate", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CameraRotate = exports('CameraRotate', (_dec = ccclass('CameraRotate'), _dec2 = property(Boolean), _dec3 = property(Node), _dec4 = property(Camera), _dec5 = property(RichText), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CameraRotate, _Component);

        function CameraRotate() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "isRotate", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "targetNode", _descriptor2, _assertThisInitialized(_this));

          _this.originalTouchDistance = -1;
          _this.minScale = 4;
          _this.maxScale = 100;
          _this.originalNodeScale = void 0;

          _initializerDefineProperty(_this, "cameraScale", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "text", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = CameraRotate.prototype;

        _proto.Rotate = function Rotate() {
          this.isRotate = !this.isRotate;

          if (this.isRotate) {
            this.targetNode.eulerAngles = new Vec3(-30, -45, 0);
            this.targetNode.position = new Vec3(-25, 20, 25);
          } else {
            this.targetNode.eulerAngles = new Vec3(-90, 0, 0);
            this.targetNode.position = new Vec3(0, 20, 0);
          }
        };

        _proto.onLoad = function onLoad() {
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, function () {
            this.originalTouchDistance = -1;
          }, this);
          input.on(Input.EventType.MOUSE_WHEEL, this.onMouseMove, this);
        };

        _proto.onTouchMove = function onTouchMove(event) {
          var touches = event.getTouches();

          if (touches.length >= 2) {
            var temp = v2();
            Vec2.subtract(temp, touches[0].getLocation(), touches[1].getLocation()); // ˫ָ��ǰ���

            var distance = temp.length();

            if (this.originalTouchDistance == -1) {
              // ˫ָ��ʼ���
              this.originalTouchDistance = distance; // �ڵ��ʼ����

              this.originalNodeScale = this.cameraScale.orthoHeight;
            }

            this.text.string = "distance:" + distance + "originalTouchDistance:" + this.originalTouchDistance + "originalNodeScale:" + this.originalNodeScale; // ˫ָ��ǰ��� / ˫ָ��ʼ���

            var scale = this.originalTouchDistance / distance; // �ڵ��ʼ���� * (˫ָ��ǰ��� / ˫ָ��ʼ���)

            scale = this.originalNodeScale * scale; // ���ڽڵ����ű�

            scale = clamp(scale, this.minScale, this.maxScale);
            this.cameraScale.orthoHeight = scale;
          }
        };

        _proto.onMouseMove = function onMouseMove(event) {
          var touches = event;
          var temp = -(touches.getScrollY() / 1000);
          this.cameraScale.orthoHeight = clamp(this.cameraScale.orthoHeight += temp, this.minScale, this.maxScale); //this.cameraScale.orthoHeight += temp;
        };

        return CameraRotate;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isRotate", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cameraScale", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "text", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./CameraRotate.ts', './MeshWall.ts', './MoveTest1.ts', './main.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/main.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Material, Node, utils, MeshRenderer, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Material = module.Material;
      Node = module.Node;
      utils = module.utils;
      MeshRenderer = module.MeshRenderer;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "54459OrOd9MlIGwHEuXFADD", "main", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          executeInEditMode = _decorator.executeInEditMode;
      var ModeType;

      (function (ModeType) {
        ModeType[ModeType["triangle"] = 0] = "triangle";
        ModeType[ModeType["panel"] = 1] = "panel";
        ModeType[ModeType["box"] = 2] = "box";
        ModeType[ModeType["panelByIndices"] = 4] = "panelByIndices";
      })(ModeType || (ModeType = {}));

      Enum(ModeType);
      var Main = exports('Main', (_dec = ccclass('Main'), _dec2 = property({
        type: Material
      }), _dec3 = property({
        type: ModeType,
        tooltip: "创建模式"
      }), _dec(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Main, _Component);

        function Main() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "materials", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_modelType", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Main.prototype;

        _proto.start = function start() {
          this.box();
        };

        _proto.box = function box() {
          var node = new Node();
          this.node.addChild(node);
          var point = [//bootom
          1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, //top
          0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, //left
          0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, //right
          1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, //back
          0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, //front
          0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1];
          var uvs = [//bootom
          1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, //top
          0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, //left
          0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, //right
          0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, //back
          0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, //front
          0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0];
          var normals = [0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1];
          var mesh = utils.createMesh({
            positions: point,
            uvs: uvs,
            normals: normals
          });
          var render = node.addComponent(MeshRenderer);
          render.mesh = mesh;
          render.setMaterial(this.materials, 0);
        };

        _proto.boxByIndices = function boxByIndices() {
          var node = new Node();
          this.node.addChild(node);
          var point = [0, 0, 0, //0
          0, 0, 1, //1  
          1, 0, 0, //2
          1, 0, 1, //3   
          0, 1, 0, //4
          1, 1, 0, //5
          0, 1, 1, //6
          1, 1, 1 //7
          ];
          var indices = [//bottom
          0, 2, 1, 1, 2, 3, //top
          4, 6, 5, 5, 6, 7, // left
          0, 1, 4, 4, 1, 6, //right
          2, 5, 3, 3, 5, 7, //  back
          4, 5, 0, 0, 5, 2, //front
          1, 3, 6, 6, 3, 7];
          var uvs = [1, 1, 0, 1, //1
          0, 1, //2            
          1, 1, //3
          1, 0, //4
          0, 0, //5
          0, 0, // 6
          1, 0 //7
          ];
          var mesh = utils.createMesh({
            positions: point,
            indices: indices,
            uvs: uvs // normals: normals,

          });
          var render = node.addComponent(MeshRenderer);
          render.mesh = mesh;
          render.setMaterial(this.materials, 0);
        };

        _proto.triangle = function triangle() {
          var node = new Node();
          this.node.addChild(node);
          var point = [0, 0, 0, //点1  x,y,z
          0, 0, 1, //点2  x,y,z
          1, 0, 0 //点3  x,y,z
          ];
          var uvs = [0, 0, 0, 1, 1, 0];
          var normals = [0, 1, 0, 0, 1, 0, 0, 1, 0];
          var mesh = utils.createMesh({
            positions: point,
            uvs: uvs,
            normals: normals
          });
          var render = node.addComponent(MeshRenderer);
          render.mesh = mesh;
          render.setMaterial(this.materials, 0);
        };

        _proto.panel = function panel() {
          var node = new Node();
          this.node.addChild(node);
          var point = [0, 0, 0, 0, 0, 1, 1, 0, 0, //点3  x,y,z
          1, 0, 0, //点3  x,y,z
          0, 0, 1, //点2  x,y,z
          1, 0, 1];
          var uvs = [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1];
          var normals = [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0];
          var mesh = utils.createMesh({
            positions: point,
            uvs: uvs,
            normals: normals
          });
          var render = node.addComponent(MeshRenderer);
          render.mesh = mesh;
          render.setMaterial(this.materials, 0);
        };

        _proto.panelByIndices = function panelByIndices() {
          var node = new Node();
          this.node.addChild(node);
          var point = [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1];
          var uvs = [0, 0, 0, 1, 1, 0, 1, 1];
          var normals = [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0];
          var indices = [0, 1, 2, 2, 1, 3];
          var mesh = utils.createMesh({
            positions: point,
            uvs: uvs,
            normals: normals,
            indices: indices
          });
          var render = node.addComponent(MeshRenderer);
          render.mesh = mesh;
          render.setMaterial(this.materials, 0);
        };

        _proto.update = function update(deltaTime) {// [4]
        };

        _createClass(Main, [{
          key: "modeType",
          get: function get() {
            return this._modelType;
          },
          set: function set(val) {
            if (this._modelType !== val) {
              this._modelType = val;
              this.node.destroyAllChildren();

              if (val === ModeType.triangle) {
                this.triangle();
              } else if (val === ModeType.panel) {
                this.panel();
              } else if (val === ModeType.box) {
                this.box();
              } // else if (val === ModeType.boxByIndices) {
              //    this.boxByIndices();
              //} 
              else if (val === ModeType.panelByIndices) {
                  this.panelByIndices();
                }
            }
          }
        }]);

        return Main;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "materials", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_modelType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ModeType.triangle;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "modeType", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "modeType"), _class2.prototype)), _class2)) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MeshWall.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec3, Material, MeshRenderer, utils, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Material = module.Material;
      MeshRenderer = module.MeshRenderer;
      utils = module.utils;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "2970b8lwAxNo4VWHOJ288Zj", "MeshWall", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MeshWall = exports('MeshWall', (_dec = ccclass('MeshWall'), _dec2 = property([Vec3]), _dec3 = property({
        type: Material
      }), _dec4 = property({
        type: MeshRenderer
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MeshWall, _Component);

        function MeshWall() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "wall", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "materials", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "meshRenderer", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = MeshWall.prototype;

        _proto.start = function start() {
          this.box();
        };

        _proto.box = function box() {
          // let node = new Node();
          //this.node.addChild(node);
          var point = [];

          for (var i = 0; i < this.wall.length / 2; i += 2) {
            if (i + 2 >= this.wall.length / 2) {
              point.push(this.wall[i].x, this.wall[i].y, this.wall[i].z);
              point.push(this.wall[i + 1].x, this.wall[i + 1].y, this.wall[i + 1].z);
              point.push(this.wall[0].x, this.wall[0].y, this.wall[0].z);
              point.push(this.wall[0].x, this.wall[0].y, this.wall[0].z);
              point.push(this.wall[i + 1].x, this.wall[i + 1].y, this.wall[i + 1].z);
              point.push(this.wall[1].x, this.wall[1].y, this.wall[1].z);
            } else {
              point.push(this.wall[i].x, this.wall[i].y, this.wall[i].z);
              point.push(this.wall[i + 1].x, this.wall[i + 1].y, this.wall[i + 1].z);
              point.push(this.wall[i + 2].x, this.wall[i + 2].y, this.wall[i + 2].z);
              point.push(this.wall[i + 2].x, this.wall[i + 2].y, this.wall[i + 2].z);
              point.push(this.wall[i + 1].x, this.wall[i + 1].y, this.wall[i + 1].z);
              point.push(this.wall[i + 3].x, this.wall[i + 3].y, this.wall[i + 3].z);
            }
          }

          for (var i = 8; i < this.wall.length; i += 2) {
            if (i + 2 >= this.wall.length) {
              point.push(this.wall[i].x, this.wall[i].y, this.wall[i].z);
              point.push(this.wall[9].x, this.wall[9].y, this.wall[9].z);
              point.push(this.wall[i + 1].x, this.wall[i + 1].y, this.wall[i + 1].z);
              point.push(this.wall[i].x, this.wall[i].y, this.wall[i].z);
              point.push(this.wall[8].x, this.wall[8].y, this.wall[8].z);
              point.push(this.wall[9].x, this.wall[9].y, this.wall[9].z);
            } else {
              point.push(this.wall[i].x, this.wall[i].y, this.wall[i].z);
              point.push(this.wall[i + 2].x, this.wall[i + 2].y, this.wall[i + 2].z);
              point.push(this.wall[i + 1].x, this.wall[i + 1].y, this.wall[i + 1].z);
              point.push(this.wall[i + 1].x, this.wall[i + 1].y, this.wall[i + 1].z);
              point.push(this.wall[i + 2].x, this.wall[i + 2].y, this.wall[i + 2].z);
              point.push(this.wall[i + 3].x, this.wall[i + 3].y, this.wall[i + 3].z);
            }
          }

          for (var i = 1; i < this.wall.length / 2; i += 2) {
            if (i + 10 > this.wall.length) {
              point.push(this.wall[i].x, this.wall[i].y, this.wall[i].z);
              point.push(this.wall[i + 8].x, this.wall[i + 8].y, this.wall[i + 8].z);
              point.push(this.wall[1].x, this.wall[1].y, this.wall[1].z);
              point.push(this.wall[1].x, this.wall[1].y, this.wall[1].z);
              point.push(this.wall[i + 8].x, this.wall[i + 8].y, this.wall[i + 8].z);
              point.push(this.wall[9].x, this.wall[9].y, this.wall[9].z);
            } else {
              point.push(this.wall[i].x, this.wall[i].y, this.wall[i].z);
              point.push(this.wall[i + 8].x, this.wall[i + 8].y, this.wall[i + 8].z);
              point.push(this.wall[i + 2].x, this.wall[i + 2].y, this.wall[i + 2].z);
              point.push(this.wall[i + 2].x, this.wall[i + 2].y, this.wall[i + 2].z);
              point.push(this.wall[i + 8].x, this.wall[i + 8].y, this.wall[i + 8].z);
              point.push(this.wall[i + 10].x, this.wall[i + 10].y, this.wall[i + 10].z);
            }
          }

          var uvs = [//left
          0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, //right
          0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, //back
          0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, //front
          0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, //right
          0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, //back
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, //front
          0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, //right
          0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, //back
          0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, //front
          0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1];
          var normals = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0];
          var mesh = utils.MeshUtils.createMesh({
            positions: point,
            uvs: uvs,
            normals: normals
          }); //let render = node.addComponent(MeshRenderer);

          this.meshRenderer.mesh = mesh; //render.setMaterial(this.materials, 0);
        };

        return MeshWall;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "wall", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "materials", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "meshRenderer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MoveTest1.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Camera, Node, math, input, Input, PhysicsSystem, geometry, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      Node = module.Node;
      math = module.math;
      input = module.input;
      Input = module.Input;
      PhysicsSystem = module.PhysicsSystem;
      geometry = module.geometry;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "fa153gkMi1Mn4TVAg9U78e2", "MoveTest1", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MoveTest1 = exports('MoveTest1', (_dec = ccclass('MoveTest'), _dec2 = property(Camera), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MoveTest1, _Component);

        function MoveTest1() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "cameraCom", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "targetNode", _descriptor2, _assertThisInitialized(_this));

          _this._ray = new geometry.Ray();
          _this._position = new math.Vec3();
          return _this;
        }

        var _proto = MoveTest1.prototype;

        _proto.start = function start() {
          math.Vec3.copy(this._position, this.targetNode.position);
          input.on(Input.EventType.TOUCH_START, this._addEvents, this);
          input.on(Input.EventType.TOUCH_END, this._removeEvents, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        };

        _proto._addEvents = function _addEvents(event) {
          var touch = event.touch;
          this.cameraCom.screenPointToRay(touch.getLocationX(), touch.getLocationY(), this._ray);

          if (PhysicsSystem.instance.raycast(this._ray)) {
            var raycastResults = PhysicsSystem.instance.raycastResults;

            for (var i = 0; i < raycastResults.length; i++) {
              var item = raycastResults[i];
              this.targetNode = item.collider.node;
            }
          }

          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        };

        _proto._removeEvents = function _removeEvents() {
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        };

        _proto.onTouchMove = function onTouchMove(event) {
          var touch = event.touch;
          this.cameraCom.screenPointToRay(touch.getLocationX(), touch.getLocationY(), this._ray);

          if (PhysicsSystem.instance.raycast(this._ray)) {
            var raycastResults = PhysicsSystem.instance.raycastResults;

            for (var i = 0; i < raycastResults.length; i++) {
              var item = raycastResults[i];

              if (item.collider.node == this.targetNode) {
                this.updatePlayerPos_1(item.hitPoint);
                break;
              }
            }
          }
        };

        _proto.updatePlayerPos_1 = function updatePlayerPos_1(hitPoint) {
          this._position.x = hitPoint.x;
          this._position.z = hitPoint.z;
          this.targetNode.setPosition(this._position);
        };

        return MoveTest1;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cameraCom", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});
