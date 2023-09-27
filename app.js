!function(e){function t(t){for(var i,h,n=t[0],o=t[1],l=t[2],d=0,p=[];d<n.length;d++)h=n[d],Object.prototype.hasOwnProperty.call(a,h)&&a[h]&&p.push(a[h][0]),a[h]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);for(c&&c(t);p.length;)p.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],i=!0,n=1;n<s.length;n++){var o=s[n];0!==a[o]&&(i=!1)}i&&(r.splice(t--,1),e=h(h.s=s[0]))}return e}var i={},a={0:0},r=[];function h(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,h),s.l=!0,s.exports}h.m=e,h.c=i,h.d=function(e,t,s){h.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},h.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},h.t=function(e,t){if(1&t&&(e=h(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(h.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)h.d(s,i,function(t){return e[t]}.bind(null,i));return s},h.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return h.d(t,"a",t),t},h.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},h.p="";var n=window.webpackJsonp=window.webpackJsonp||[],o=n.push.bind(n);n.push=t,n=n.slice();for(var l=0;l<n.length;l++)t(n[l]);var c=o;r.push([1,1]),s()}([,function(e,t,s){"use strict";s.r(t);var i=s(0),a=s.n(i);class r extends Phaser.Physics.Arcade.Sprite{constructor(e,t,s,i){super(e,t,s,i),e.add.existing(this),this.score=1,e.tweens.add({targets:this,y:this.y-3,duration:Phaser.Math.Between(1500,2500),repeat:-1,easy:"linear",yoyo:!0})}}var h=r;class n extends Phaser.Physics.Arcade.StaticGroup{constructor(e){super(e.physics.world,e),this.createFromConfig({classType:h})}mapProperties(e){return e&&0!==e.length?e.reduce(((e,t)=>(e[t.name]=t.value,e)),{}):{}}addFromLayer(e){const{score:t,type:s}=this.mapProperties(e.properties);e.objects.forEach((e=>{const i=this.get(e.x,e.y,s),a=this.mapProperties(e.properties);i.score=a.score||t}))}}var o=n,l={addCollider(e,t){this.scene.physics.add.collider(this,e,t,null,this)},addOverlap(e,t,s){return this.scene.physics.add.overlap(this,e,t,null,s||this),this},positionDifferenceX:0,prevRay:null,prevHasHit:null,ray(e,t,s=30,i=0){const{x:a,y:r,width:h,halfHeight:n}=e;if(this.bodyPositionDifferenceX+=e.deltaX(),Math.abs(this.bodyPositionDifferenceX)<=i&&null!==this.prevHasHit)return{ray:this.prevRay,hasHit:this.prevHasHit};const o=new Phaser.Geom.Line;let l=!1;switch(e.facing){case Phaser.Physics.Arcade.FACING_RIGHT:o.x1=a+h,o.y1=r+n,o.x2=o.x1+s,o.y2=o.y1+s;break;case Phaser.Physics.Arcade.FACING_LEFT:o.x1=a,o.y1=r+n,o.x2=o.x1-s,o.y2=o.y1+s}const c=t.getTilesWithinShape(o);return c.length>0&&(l=this.prevHasHit=c.some((e=>-1!==e.index))),this.prevRay=o,this.bodyPositionDifferenceX=0,{ray:o,hasHit:l}}};var c=class{constructor(e,t,s,i=1,a){this.bar=new Phaser.GameObjects.Graphics(e),this.x=t/i,this.y=s/i,this.scale=i,this.value=a,this.size={width:40,height:8},this.pixelPerHealth=this.size.width/this.value,e.add.existing(this.bar),this.draw(this.x,this.y,i)}draw(e,t,s){this.bar.clear();const{width:i,height:a}=this.size;this.bar.fillStyle(10158335),this.bar.fillRect(e,t,i+2,a+2),this.bar.fillStyle(16777215),this.bar.fillRect(e+2,t+2,i-2,a-2);const r=Math.floor(this.value*this.pixelPerHealth);r<=this.size.width/3?this.bar.fillStyle(16711680):this.bar.fillStyle(65280),r>0&&this.bar.fillRect(e+2,t+2,r-2,a-2),this.bar.setScrollFactor(0).setScale(s)}decrease(e){this.value=e,this.draw(this.x,this.y,this.scale)}};class d extends a.a.Physics.Arcade.Sprite{constructor(e,t,s,i){super(e,t,s,i),e.add.existing(this),e.physics.add.existing(this),this.target=null,this.effectName="hit-effect",this.on("animationcomplete",(e=>{e.key===this.effectName&&this.destroy()}),this)}placeEffect(){if(!this.target||!this.body)return;const e=this.target.getCenter();this.body.reset(e.x,this.impactPosition.y)}playOn(e,t){this.target=e,this.play(this.effectName,!0),this.impactPosition=t,this.placeEffect()}preUpdate(e,t){super.preUpdate(e,t),this.placeEffect(this.impactPosition.y)}}var p=d;class y extends a.a.Physics.Arcade.Sprite{constructor(e,t,s,i){super(e,t,s,i),this.timeFromLastProjectile=null,e.add.existing(this),e.physics.add.existing(this),this.setOrigin(.5,1),this.damage=15,this.attackSpeed=1e3,this.setDepth(3),this.weaponName=i,this.wielder=null,this.weaponAnim=i+"-swing",this.activateWeapon(!1),this.on("animationcomplete",(e=>{e.key===this.weaponAnim&&(this.activateWeapon(!1),this.body.checkCollision.none=!1,this.body.reset(0,0))}))}preUpdate(e,t){super.preUpdate(e,t),this.active&&(this.wielder.playerLastDirection===a.a.Physics.Arcade.FACING_RIGHT?(this.setFlipX(!1),this.body.reset(this.wielder.x+15,this.wielder.y)):(this.setFlipX(!0),this.body.reset(this.wielder.x-15,this.wielder.y)))}swing(e){this.wielder=e,this.activateWeapon(!0),this.anims.play("default-sword-swing",!0),this.timeFromLastProjectile=this.getTimestamp()}dilverHit(e){const t={x:this.x,y:this.y};new p(this.scene,0,0,"hit-sheet").playOn(e,t),this.body.checkCollision.none=!0}notAllowedtoshoot(){return this.timeFromLastProjectile&&this.timeFromLastProjectile+this.attackSpeed>this.getTimestamp()}activateWeapon(e){this.setActive(e),this.setVisible(e)}getTimestamp(){return(new Date).getTime()}}var m=y;class u extends a.a.Physics.Arcade.Sprite{constructor(e,t,s,i){super(e,t,s,i),e.add.existing(this),e.physics.add.existing(this),this.speed=300,this.maxDistance=300,this.traveledDistance=0,this.damage=10,this.cooldown=700,this.setSize(this.width-12,this.height-20)}preUpdate(e,t){super.preUpdate(e,t),this.traveledDistance+=this.body.deltaAbsX(),this.isOutOfRange()&&(this.body.reset(0,0),this.setActive(!1),this.setVisible(!1),this.traveledDistance=0)}fire(e,t,s){this.setActive(!0),this.setVisible(!0),this.body.reset(e,t),this.setVelocityX(this.speed),s&&this.play(s)}isOutOfRange(){return this.traveledDistance&&this.traveledDistance>=this.maxDistance}dilverHit(e){const t={x:this.x,y:this.y};new p(this.scene,0,0,"hit-sheet").playOn(e,t),this.setActive(!1),this.setVisible(!1),this.body.reset(0,0),this.traveledDistance=0}}var g=u;class f extends a.a.Physics.Arcade.Group{constructor(e,t){super(e.physics.world,e),this.createMultiple({frameQuantity:5,active:!1,visible:!1,key:t,classType:g}),this.timeFromLastProjectile=null}fireProjectile(e,t){const s=this.getFirstDead(!1);if(!s)return;if(this.timeFromLastProjectile&&this.timeFromLastProjectile+s.cooldown>this.getTimestamp())return;const i=e.getCenter();let r;e.playerLastDirection===a.a.Physics.Arcade.FACING_RIGHT?(s.speed=Math.abs(s.speed),s.setFlipX(!1),r=i.x):(s.speed=-Math.abs(s.speed),s.setFlipX(!0),r=i.x),s.fire(r,i.y,t),this.timeFromLastProjectile=this.getTimestamp()}getTimestamp(){return(new Date).getTime()}}var b=f;class v extends a.a.Events.EventEmitter{constructor(){super()}}var k=new v;class w extends a.a.Physics.Arcade.Sprite{constructor(e,t,s){var i,a;super(e,t,s,"playerMove"),this.initSounds(),e.add.existing(this),e.physics.add.existing(this),this.init(),this.initEvent(),Object.assign(this,l),(i=this.scene.anims).create({key:"hit-effect",frames:i.generateFrameNumbers("hit-sheet",{start:0,end:4}),frameRate:10,repeat:0}),i.create({key:"default-sword-swing",frames:i.generateFrameNumbers("default-sword",{start:0,end:2}),frameRate:20,repeat:0}),(a=this.scene.anims).create({key:"run",frames:a.generateFrameNumbers("playerMove",{start:11,end:16}),frameRate:10,repeat:-1}),a.create({key:"idle",frames:a.generateFrameNumbers("playerMove",{start:0,end:8}),frameRate:10,repeat:-1}),a.create({key:"jump",frames:a.generateFrameNumbers("playerMove",{start:17,end:23}),frameRate:2,repeat:1}),a.create({key:"throw",frames:a.generateFrameNumbers("player-throw",{start:0,end:7}),frameRate:20,repeat:0}),a.create({key:"iceballShoot",frames:[{key:"iceball"},{key:"iceball-1"}],frameRate:7,repeat:-1}),a.create({key:"slide",frames:a.generateFrameNumbers("player-slide-sheet",{start:0,end:2}),frameRate:20,repeat:0}),a.create({key:"diamond-shine",frames:[{key:"diamond-1"},{key:"diamond-2"},{key:"diamond-3"},{key:"diamond-4"},{key:"diamond-5"},{key:"diamond-6"}],frameRate:5,repeat:-1}),this.isSliding=!1,this.projectiles=new b(this.scene,"iceball"),this.meleWeapon=new m(this.scene,0,0,"default-sword"),this.handleAttack(),this.handleMovment()}initSounds(){this.running=this.scene.sound.add("running",{volume:.5}),this.projectileAttack=this.scene.sound.add("projectile-attack",{volume:.5}),this.swordAttack=this.scene.sound.add("swip",{volume:.5}),this.jump=this.scene.sound.add("jump",{volume:.5}),this.scene.time.addEvent({delay:350,repeat:-1,callbackScope:this,callback:()=>{this.isPlaying("run")&&this.running.play()}})}isPlaying(e){return this.anims.isPlaying&&this.anims.getCurrentKey()===e}init(){this.playerGravity=500,this.playerSpeed=150,this.jumpCount=0,this.allowedJumps=2,this.currentdistance=0,this.playerLastDirection=a.a.Physics.Arcade.FACING_RIGHT,this.body.gravity.y=this.playerGravity,this.setOrigin(.5,1),this.hasBeenHitten=!1,this.setSize(23,this.body.height),this.setOffset(5,3),this.setCollideWorldBounds(!0),this.cursors=this.scene.input.keyboard.createCursorKeys(),this.health=10,this.hp=new c(this.scene,this.scene.config.leftTopCorner.x,this.scene.config.leftTopCorner.y,2,100)}initEvent(){this.scene.events.on(a.a.Scenes.Events.UPDATE,this.update,this)}update(){if(this.hasBeenHitten||this.isSliding||!this.body)return;this.getBounds().top>=this.scene.config.height-3&&k.emit("Player_Loose");const{left:e,right:t,space:s}=this.cursors,i=this.body.onFloor(),r=a.a.Input.Keyboard.JustDown(s);e.isDown?(this.playerLastDirection=a.a.Physics.Arcade.FACING_LEFT,this.setVelocityX(-this.playerSpeed),this.setFlipX(!0)):t.isDown?(this.playerLastDirection=a.a.Physics.Arcade.FACING_RIGHT,this.setVelocityX(this.playerSpeed),this.setFlipX(!1)):this.setVelocityX(0),i&&(this.jumpCount=0),r&&(i||this.jumpCount<this.allowedJumps)&&(this.jump.play(),this.setVelocityY(2*-this.playerSpeed),this.jumpCount++),this.isPlaying("throw")||this.isPlaying("slide")||(i?0!=this.body.velocity.x?this.play("run",!0):this.play("idle",!0):this.play("jump",!0))}bounceOff(e){e.body?this.body.touching.right?this.setVelocityX(-this.playerSpeed):this.setVelocityX(this.playerSpeed):this.body.blocked.right?this.setVelocityX(-this.playerSpeed):this.setVelocityX(this.playerSpeed),this.health-=e.damage||e.properties.damage,this.hp.decrease(this.health),setTimeout((()=>this.setVelocityY(-this.playerSpeed)),0)}takesHit(e){if(this.hasBeenHitten)return;this.hasBeenHitten=!0,this.bounceOff(e),e.dilverHit&&e.dilverHit(this),this.health<=0&&k.emit("Player_Loose");const t=this.takeHitTween();this.scene.time.delayedCall(1e3,(()=>{this.hasBeenHitten=!1,t.stop(),this.clearTint()}))}takeHitTween(){return this.scene.tweens.add({delay:100,targets:this,loop:-1,tint:16777215})}handleAttack(){this.scene.input.keyboard.on("keydown-Q",(()=>{this.play("throw",!0),this.projectiles.fireProjectile(this,"iceballShoot"),this.projectileAttack.play()}),this),this.scene.input.keyboard.on("keydown-E",(()=>{this.meleWeapon.notAllowedtoshoot()||(this.play("throw",!0),this.meleWeapon.swing(this),this.swordAttack.play())}),this)}handleMovment(){this.scene.input.keyboard.on("keydown-DOWN",(()=>{this.body.setSize(this.width,this.height/2),this.setOffset(0,this.height/2),this.setVelocityX(0),this.play("slide",!0),this.isSliding=!0})),this.scene.input.keyboard.on("keyup-DOWN",(()=>{this.body.setSize(this.width,38),this.setOffset(0,0),this.isSliding=!1}))}}var x=w;class P extends Phaser.GameObjects.Group{constructor(e){super(e),Object.assign(this,l)}getProjectiles(){const e=new Phaser.GameObjects.Group;return this.getChildren().forEach((t=>{t.projectiles&&e.addMultiple(t.projectiles.getChildren())})),e}}var S=P;class _ extends Phaser.GameObjects.Container{constructor(e,t,s){super(e,t,s),e.add.existing(this);const{rightTopCorner:i}=e.config;this.setPosition(i.x-50,i.y+10),this.setScrollFactor(0),this.setupList()}setupList(){this.fontSize=20;const e=this.createScoreboard();this.add([e])}createScoreboard(){const e=this.scene.add.text(0,0,"0",{fontSize:this.fontSize+"px",fill:"#fff"}),t=this.scene.add.image(e.width+5,0,"diamond").setOrigin(0).setScale(1.3),s=this.scene.add.container(0,0,[e,t]);return s.list,s.setName("scoreBoard"),s}updateScoreboard(e){const[t,s]=this.getByName("scoreBoard").list;t.setText(e),s.setX(t.width+5)}}var C=_,A={addCollider(e,t){this.scene.physics.add.collider(this,e,t,null,this)},addOverlap(e,t,s){return this.scene.physics.add.overlap(this,e,t,null,s||this),this},positionDifferenceX:0,prevRay:null,prevHasHit:null,ray(e,t,s=30,i=0){const{x:a,y:r,width:h,halfHeight:n}=e;if(this.bodyPositionDifferenceX+=e.deltaX(),Math.abs(this.bodyPositionDifferenceX)<=i&&null!==this.prevHasHit)return{ray:this.prevRay,hasHit:this.prevHasHit};const o=new Phaser.Geom.Line;let l=!1;switch(e.facing){case Phaser.Physics.Arcade.FACING_RIGHT:o.x1=a+h,o.y1=r+n,o.x2=o.x1+s,o.y2=o.y1+s;break;case Phaser.Physics.Arcade.FACING_LEFT:o.x1=a,o.y1=r+n,o.x2=o.x1-s,o.y2=o.y1+s}const c=t.getTilesWithinShape(o);return c.length>0&&(l=this.prevHasHit=c.some((e=>-1!==e.index))),this.prevRay=o,this.bodyPositionDifferenceX=0,{ray:o,hasHit:l}}};class L extends a.a.Physics.Arcade.Sprite{constructor(e,t,s,i){super(e,t,s,i),e.add.existing(this),e.physics.add.existing(this),this.init(),Object.assign(this,A),this.initEvent(),this.timeFromLastTurn=0,this.maxPatrolDistance=200,this.config=e.config,this.damage=20,this.health=40}init(){this.speed=100,this.gravity=400,this.setOrigin(.5,1),this.setImmovable(!0),this.body.gravity.y=this.gravity,this.setCollideWorldBounds(!0),this.setVelocityX(this.speed),this.rayGraphics=this.scene.add.graphics({lineStyle:{width:2,color:11141290,alpha:0}})}initEvent(){this.scene.events.on(a.a.Scenes.Events.UPDATE,this.update,this)}update(e){if(this.patrol(e),this.getBounds().bottom>600)return this.scene.events.removeListener(a.a.Scenes.Events.UPDATE,this.update,this),this.setActive(!1),this.rayGraphics.clear(),void this.destroy()}patrol(e){if(!this.body||!this.body.onFloor())return;const{ray:t,hasHit:s}=this.ray(this.body,this.layerCollide,30,2);this.currentPatrolDistance+=this.body.deltaAbsX(),this.config.debug&&(this.rayGraphics.clear(),this.rayGraphics.strokeLineShape(t)),(!s||this.currentPatrolDistance>=this.maxPatrolDistance)&&this.timeFromLastTurn+100<e&&(this.setFlipX(!this.flipX),this.setVelocityX(this.speed=-this.speed),this.timeFromLastTurn=e,this.currentPatrolDistance=0)}takesHit(e){this.health-=e.damage,e.dilverHit(this),this.health<=0&&(this.setTint(16711680),this.setVelocity(0,-200),this.body.checkCollision.none=!0,this.setCollideWorldBounds(!1))}collideWithLayer(e){this.layerCollide=e}}var O=L;var j=class extends O{constructor(e,t,s){var i;super(e,t,s,"birdman"),(i=e.anims).create({key:"bird_idle",frames:i.generateFrameNumbers("birdman",{start:0,end:12}),frameRate:7,repeat:-1}),i.create({key:"birdman-hurt",frames:i.generateFrameNumbers("birdman",{start:25,end:26}),frameRate:10,repeat:0})}init(){super.init(),this.setSize(this.body.width-7,43),this.setOffset(6,20)}update(e,t){super.update(e,t),this.active&&(this.anims.isPlaying&&"birdman-hurt"===this.anims.getCurrentKey()||this.play("bird_idle",!0))}takesHit(e){super.takesHit(e),this.play("birdman-hurt",!0)}};class F extends a.a.Physics.Arcade.Sprite{constructor(e,t,s,i){super(e,t,s,i),e.add.existing(this),e.physics.add.existing(this),this.init(),Object.assign(this,l),this.initEvent(),this.timeFromLastTurn=0,this.maxPatrolDistance=200,this.config=e.config,this.damage=20,this.health=40}init(){this.speed=100,this.gravity=400,this.setOrigin(.5,1),this.setImmovable(!0),this.body.gravity.y=this.gravity,this.setCollideWorldBounds(!0),this.setVelocityX(this.speed),this.rayGraphics=this.scene.add.graphics({lineStyle:{width:2,color:11141290,alpha:0}})}initEvent(){this.scene.events.on(a.a.Scenes.Events.UPDATE,this.update,this)}update(e){if(this.patrol(e),this.getBounds().bottom>600)return this.scene.events.removeListener(a.a.Scenes.Events.UPDATE,this.update,this),this.setActive(!1),this.rayGraphics.clear(),void this.destroy()}patrol(e){if(!this.body||!this.body.onFloor())return;const{ray:t,hasHit:s}=this.ray(this.body,this.layerCollide,30,2);this.currentPatrolDistance+=this.body.deltaAbsX(),this.config.debug&&(this.rayGraphics.clear(),this.rayGraphics.strokeLineShape(t)),(!s||this.currentPatrolDistance>=this.maxPatrolDistance)&&this.timeFromLastTurn+100<e&&(this.setFlipX(!this.flipX),this.setVelocityX(this.speed=-this.speed),this.timeFromLastTurn=e,this.currentPatrolDistance=0)}takesHit(e){this.health-=e.damage,e.dilverHit(this),this.health<=0&&(this.setTint(16711680),this.setVelocity(0,-200),this.body.checkCollision.none=!0,this.setCollideWorldBounds(!1))}collideWithLayer(e){this.layerCollide=e}}var H=F;var T=class extends H{constructor(e,t,s){var i;super(e,t,s,"sneak"),(i=e.anims).create({key:"sneak_idle",frames:i.generateFrameNumbers("sneak",{start:0,end:12}),frameRate:7,repeat:-1}),i.create({key:"sneak-hurt",frames:i.generateFrameNumbers("sneak",{start:21,end:22}),frameRate:10,repeat:0}),i.create({key:"fireball",frames:[{key:"fireball-1"},{key:"fireball-2"},{key:"fireball-3"}],frameRate:3,repeat:-1})}init(){super.init(),this.speed=50,this.setSize(12,45),this.setOffset(10,15),this.projectiles=new b(this.scene,"fireball-1"),this.timeFromLastAttack=0,this.attackDelay=this.getAttackDelay(),this.playerLastDirection=null}update(e,t){this.body&&(this.body.velocity.x>0?this.playerLastDirection=Phaser.Physics.Arcade.FACING_RIGHT:this.playerLastDirection=Phaser.Physics.Arcade.FACING_LEFT,super.update(e,t),this.active&&(this.anims.isPlaying&&"sneak-hurt"===this.anims.getCurrentKey()||(this.play("sneak_idle",!0),this.timeFromLastAttack+this.attackDelay<=e&&(this.projectiles.fireProjectile(this,"fireball"),this.timeFromLastAttack=e,this.attackDelay=this.getAttackDelay()))))}takesHit(e){super.takesHit(e),this.play("sneak-hurt",!0)}getAttackDelay(){return Phaser.Math.Between(1e3,4e3)}};class D extends a.a.Scene{constructor(e){super("playGame"),this.config=e,this.score=0}create(e){const t=this.add.image(this.config.leftTopCorner.x+110,this.config.leftTopCorner.y,"mute").setOrigin(0).setScale(.05).setDepth(10).setInteractive().setScrollFactor(0);let s=1;t.on("pointerdown",(()=>{1==s?(this.sound.pauseAll(),s=0,t.setTexture("unmute")):(this.sound.resumeAll(),s=1,t.setTexture("mute"))}),this),this.collide=this.sound.add("coin-pickup"),this.playBgMusic(),this.hud=new C(this,0,0);const i=this.creatMap(),a=this.creatLayers(i),r=this.getPlayerZone(a.mapObject),h=this.creatPlayer(r.start);this.creatCamera(h),this.createEndPoint(r.end,h);const n=this.addAllEnemies(a.collide,h,a.enemeyObjects,a.plat),o=this.addcollectables(a.collectables);this.createPlayerColliders(h,{colliders:{platformsColliders:a.collide,projectiles:n.getProjectiles(),collectables:o,traps:a.traps}}),this.creatBG(i),this.creatBackButton(),"Player_Loose"!==e&&this.createGameEvents()}creatBackButton(){this.add.image(this.config.rightBottomCorner.x,this.config.rightBottomCorner.y,"back").setScrollFactor(0).setOrigin(1).setScale(2).setInteractive().on("pointerdown",(()=>{this.scene.start("MenuScene")}),this)}playBgMusic(){this.sound.get("theme")||this.sound.add("theme",{loop:!0,volume:.7}).play()}update(){this.darkSpike.tilePositionX=.3*this.cameras.main.scrollX,this.skyBg.tilePositionX=.3*this.cameras.main.scrollX}createGameEvents(){k.on("Player_Loose",(()=>{this.scene.restart("Player_Loose")}))}createPlayerColliders(e,{colliders:t}){e.addCollider(t.platformsColliders),e.addCollider(t.projectiles,this.onWeaponHit),e.addCollider(t.traps,this.onWeaponHit),e.addOverlap(t.collectables,this.onCollect,this)}addAllEnemies(e,t,s,i){const a=this.createEnemy(s,i);return a.addCollider(t,this.onPlayerCollision),a.addCollider(e),a.addCollider(t.projectiles,this.onWeaponHit),a.addOverlap(t.meleWeapon,this.onWeaponHit),a}onWeaponHit(e,t){e.takesHit(t)}onCollect(e,t){this.collide.play(),t.disableBody(!0,!0),this.score+=t.score,this.hud.updateScoreboard(this.score)}creatLayers(e){const t=e.getTileset("bg_spikes_tileset");e.createStaticLayer("DarkTile",t);const s=e.getTileset("main_lev_build_1"),i=e.createStaticLayer("collide",s).setAlpha(0),a=(e.createStaticLayer("environment",s).setDepth(-2),e.createStaticLayer("platforms",s)),r=e.getObjectLayer("playerZone").objects,h=e.getObjectLayer("Enemies"),n=e.getObjectLayer("Collectables"),o=e.createStaticLayer("traps",s);return i.setCollisionByProperty({block:!0}),o.setCollisionByExclusion(-1),{collide:i,mapObject:r,enemeyObjects:h,plat:a,collectables:n,traps:o}}creatMap(){const e=this.make.tilemap({key:"level"+this.getCurrentLevel()});return e.addTilesetImage("main_lev_build_1","tiles-1"),e.addTilesetImage("main_lev_build_2","tiles-2"),e.addTilesetImage("bg_spikes_tileset","bg-spikes-tileset"),e}getCurrentLevel(){return this.registry.get("level")||1}creatBG(e){const t=e.getObjectLayer("DistanceImage").objects[0];this.darkSpike=this.add.tileSprite(t.x,t.y,this.config.width,t.height,"background_super_dark").setDepth(-10).setScrollFactor(0,1).setOrigin(0,1),this.skyBg=this.add.tileSprite(0,0,this.config.width,240,"play-bg").setDepth(-11).setScrollFactor(0,1).setOrigin(0,0)}creatCamera(e){const{mapOffSet:t,width:s,height:i}=this.config;this.physics.world.setBounds(0,0,s+t,i+e.height),this.cameras.main.setBounds(0,0,s+t,i).setZoom(this.config.zoomFactor),this.cameras.main.startFollow(e)}creatPlayer(e){return new x(this,e.x,e.y)}createEnemy(e,t){const s={Birdman:j,sneak:T},i=new S(this);return e.objects.forEach((e=>{const a=new s[e.properties[0].value](this,e.x,e.y);a.collideWithLayer(t),i.add(a)})),i}onPlayerCollision(e,t){t.takesHit(e)}getPlayerZone(e){return{start:e.find((e=>"startZone"===e.name)),end:e.find((e=>"endZone"===e.name))}}createEndPoint(e,t){const s=this.physics.add.sprite(e.x,e.y,"end").setSize(5,this.config.height).setAlpha(0),i=this.physics.add.overlap(t,s,(()=>{i.active=!1,this.config.endOfLevels!==this.getCurrentLevel()?(this.registry.inc("level",1),k.off("Player_Loose"),this.scene.restart({gameStatus:"Player_Loose"})):this.scene.start("Credits")}))}addcollectables(e){const t=new o(this).setDepth(-1);return t.addFromLayer(e),t.playAnimation("diamond-shine"),t}}var G=D;class B extends Phaser.Scene{constructor(e){super("preload")}preload(){this.load.tilemapTiledJSON("level1","assets/crystal_world_map _Level1.json"),this.load.tilemapTiledJSON("level2","assets/crystal_world_map _Level2.json"),this.load.image("tiles-1","assets/main_lev_build_1.png"),this.load.image("tiles-2","assets/main_lev_build_2.png"),this.load.image("iceball","assets/weapons/iceball_001.png"),this.load.image("iceball-1","assets/weapons/iceball_002.png"),this.load.image("background_super_dark","assets/background03_super_dark.png"),this.load.image("bg-spikes-tileset","assets/bg_spikes_tileset.png"),this.load.image("play-bg","assets/play_bg.png"),this.load.image("back","assets/back.png"),this.load.image("fireball-1","assets/weapons/improved_fireball_001.png"),this.load.image("fireball-2","assets/weapons/improved_fireball_002.png"),this.load.image("fireball-3","assets/weapons/improved_fireball_003.png"),this.load.image("diamond","assets/collectibles/diamond.png"),this.load.image("diamond-1","assets/collectibles/diamond_big_01.png"),this.load.image("diamond-2","assets/collectibles/diamond_big_02.png"),this.load.image("diamond-3","assets/collectibles/diamond_big_03.png"),this.load.image("diamond-4","assets/collectibles/diamond_big_04.png"),this.load.image("diamond-5","assets/collectibles/diamond_big_05.png"),this.load.image("diamond-6","assets/collectibles/diamond_big_06.png"),this.load.image("mute","assets/mute.png"),this.load.image("unmute","assets/unmute.png"),this.load.audio("theme","assets/music/theme_music.wav"),this.load.audio("coin-pickup","assets/music/coin_pickup.wav"),this.load.audio("jump","assets/music/jump.wav"),this.load.audio("projectile-attack","assets/music/projectile_launch.wav"),this.load.audio("swip","assets/music/swipe.wav"),this.load.audio("running","assets/music/step_mud.wav"),this.load.image("menubg","assets/background01.png"),this.load.spritesheet("playerMove","assets/player/move_sprite_1.png",{frameWidth:32,frameHeight:38,spacing:32}),this.load.spritesheet("birdman","assets/enemy/enemy_sheet.png",{frameWidth:32,frameHeight:64,spacing:32}),this.load.spritesheet("sneak","assets/enemy/enemy_sheet_2.png",{frameWidth:32,frameHeight:64,spacing:32}),this.load.spritesheet("player-throw","assets/player/throw_attack_sheet_1.png",{frameWidth:35,frameHeight:38,spacing:30}),this.load.spritesheet("hit-sheet","assets/weapons/hit_effect_sheet.png",{frameWidth:32,frameHeight:32}),this.load.spritesheet("default-sword","assets/weapons/sword_sheet_1.png",{frameWidth:52,frameHeight:32,spacing:16}),this.load.spritesheet("player-slide-sheet","assets/player/slide_sheet copy.png",{frameWidth:32,frameHeight:38,spacing:32}),this.load.once("complete",(()=>this.startGame()))}startGame(){this.registry.set("level",1),this.registry.set("unlocked-levels",2),this.scene.start("MenuScene")}}var E=B;class X extends Phaser.Scene{constructor(e){super("MenuScene"),this.config=e,this.menu=[{scene:"playGame",text:"play"},{scene:"Level",text:"Level"},{scene:null,text:"Exit"}]}create(){this.createBG(),this.createtext()}createBG(){this.add.image(0,0,"menubg").setOrigin(0,0).setScale(2.7)}createtext(){let e=-50;this.menu.forEach((t=>{const s=this.add.text(this.config.width/2,this.config.height/2+e,t.text,{fontSize:"50px",fontStyle:"bold",fill:"#713e01"}).setOrigin(.5,1).setInteractive();e+=65,s.on("pointerover",(()=>{s.setStyle({color:"#ffffff"})}),this),s.on("pointerout",(()=>{s.setStyle({color:"#713e01"})})),s.on("pointerdown",(()=>{console.log("hi"),t.scene&&this.scene.start(t.scene),"Exit"==t.text&&this.game.destroy(!0)}))}))}}var W=X;class I extends Phaser.Scene{constructor(e){super("Level"),this.config=e}create(){const e=this.registry.get("unlocked-levels");this.menu=[];for(let t=1;t<=e;t++)this.menu.push({scene:"playGame",text:"Level "+t,levels:t});this.createBG(),this.createtext(),this.createBackBtn()}createBackBtn(){if(this.config.Cangoback){var e=this.add.image(this.config.width-10,this.config.height-10,"back");e.setOrigin(1),e.setInteractive(),e.setScale(2),e.on("pointerdown",(()=>{this.scene.start("MenuScene")}))}}createBG(){this.add.image(0,0,"menubg").setOrigin(0,0).setScale(2.7)}createtext(){let e=-50;this.menu.forEach((t=>{const s=this.add.text(this.config.width/2,this.config.height/2+e,t.text,{fontSize:"50px",fontStyle:"bold",fill:"#713e01"}).setOrigin(.5,1).setInteractive();e+=65,s.on("pointerover",(()=>{s.setStyle({color:"#ffffff"})}),this),s.on("pointerout",(()=>{s.setStyle({color:"#713e01"})})),s.on("pointerdown",(()=>{this.registry.set("level",t.levels),this.scene.start(t.scene),"Exit"==t.text&&this.game.destroy(!0)}))}))}}var N=I;class R extends Phaser.Scene{constructor(e){super("Credits"),this.config=e}create(){this.registry.get("unlocked-levels");this.menu=[{text:"Thanks for playing the Game"},{text:"Author: Ahmad Fares Abu Hajeer"}],this.createBG(),this.createtext(),this.createBackBtn()}createBackBtn(){if(this.config.Cangoback){var e=this.add.image(this.config.width-10,this.config.height-10,"back");e.setOrigin(1),e.setInteractive(),e.setScale(2),e.on("pointerdown",(()=>{this.scene.start("MenuScene")}))}}createBG(){this.add.image(0,0,"menubg").setOrigin(0,0).setScale(2.7)}createtext(){let e=-50,t=50;this.menu.forEach((s=>{this.add.text(this.config.width/2,this.config.height/2+e,s.text,{fontSize:t,fontStyle:"bold",fill:"#713e01"}).setOrigin(.5,1).setInteractive();t-=10,e+=65}))}}var M=R;const V=document.body.offsetWidth,z=600,U=1.3,J={mapOffSet:V<1600?1600-V:0,width:V,height:z,Cangoback:!0,debug:!0,zoomFactor:U,leftTopCorner:{x:(V-V/U)/2,y:69.23076923076923},rightTopCorner:{x:V/U+(V-V/U)/2,y:69.23076923076923},rightBottomCorner:{x:V/U+(V-V/U)/2,y:530.7692307692307},endOfLevels:2},Z=[E,N,W,G,M],K=e=>new e(J),Q={type:a.a.AUTO,...J,pixelArt:!0,physics:{default:"arcade"},scene:Z.map(K)};new a.a.Game(Q)}]);