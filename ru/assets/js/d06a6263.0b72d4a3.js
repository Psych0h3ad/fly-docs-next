"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[2085],{11258:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>_,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=t(74848),s=t(28453);const r={sidebar_position:5,sidebar_label:"Klipper\u53c2\u8003\u914d\u7f6e"},_="Klipper\u53c2\u8003\u914d\u7f6e",o={id:"ProductDoc/MainBoard/fly-d/fly-d5/cfg",title:"Klipper\u53c2\u8003\u914d\u7f6e",description:"",source:"@site/docs/ProductDoc/MainBoard/fly-d/fly-d5/cfg.mdx",sourceDirName:"ProductDoc/MainBoard/fly-d/fly-d5",slug:"/ProductDoc/MainBoard/fly-d/fly-d5/cfg",permalink:"/fly-docs-next/ru/docs/ProductDoc/MainBoard/fly-d/fly-d5/cfg",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-d/fly-d5/cfg.mdx",tags:[],version:"current",lastUpdatedBy:"fenghua",lastUpdatedAt:171876906e4,sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Klipper\u53c2\u8003\u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"\u4e3b\u677f\u63a5\u7ebf",permalink:"/fly-docs-next/ru/docs/ProductDoc/MainBoard/fly-d/fly-d5/wiring"},next:{title:"ADXL345",permalink:"/fly-docs-next/ru/docs/ProductDoc/MainBoard/fly-d/fly-d5/adxl345"}},p={},a=[];function d(n){const e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"klipper\u53c2\u8003\u914d\u7f6e",children:"Klipper\u53c2\u8003\u914d\u7f6e"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cfg",children:'####################################################################################\n#                         3D MELLOW /\uff08\u9700\u8981\u81ea\u884c\u6dfb\u52a0\uff09                                #\n####################################################################################\n## Fly-D5\u8d44\u6599\u7f51\u5740\uff1a\n## Fly-D5\u539f\u7406\u56fe\u7f51\u5740\uff1a\n## FLY \u5b98\u65b9\u6dd8\u5b9d\u5e97\uff1ahttps://shop126791347.taobao.com/shop/view_shop.htm?spm=a230r.1.14.4.1a4840a8hyvpPJ&user_number_id=2464680006\n## \u5982\u9700\u552e\u540e\uff0c\u8bf7\u8054\u7cfb\u6dd8\u5b9d\u5ba2\u670d\n## FLY \u552e\u540e\u6280\u672f\u652f\u6301\u7fa4\uff1a621032883\n## FLY-RRF\u56fa\u4ef6\u4ea4\u6d41\u7fa4\uff1a786561979\n\n#####################################################################\n#                               \u6ce8\u610f\u4e8b\u9879                             #\n#####################################################################\n##***\u9700\u8981\u66f4\u6539/\u68c0\u67e5\u7684\u4e8b\u9879\uff1a***\n## MCU \u8def\u5f84                                [mcu] \n## \u6253\u5370\u673a\u6d3b\u52a8\u8303\u56f4                           xyz\u7684position   \n## \u70ed\u654f\u7535\u963b\u7c7b\u578b                             [extruder] \u548c [heater_bed]\n## Z\u8f74\u9650\u4f4d\u5f00\u5173\u505c\u6b62\u4f4d\u7f6e                      [safe_z_home] \n## Z\u8f74\u9650\u4f4d\u5f00\u5173\u504f\u79fb\u4f4d\u7f6e                      [stepper_z] \n## PID \u6821\u51c6                                [extruder] \u548c [heater_bed] \n## \u5fae\u8c03\u6324\u51fa\u673a\u7535\u673a\u6b65\u8fdb\u503c                     [extruder] \n\n#####################################################################\n#                               \u6587\u4ef6\u8c03\u7528                             #\n#####################################################################\n#[include fluidd.cfg]          # FLUIDD\u8c03\u7528\u6587\u4ef6\u3002\n#[include mainsail.cfg]        # MAINSDIL\u8c03\u7528\u6587\u4ef6\u3002\n#\u9700\u8981\u81ea\u884c\u786e\u5b9a\u4f7f\u7528\u54ea\u4e2a\u6587\u4ef6\n\n#####################################################################\n#                               \u4e3b\u677f\u914d\u7f6e                             #\n#####################################################################\n[mcu]                           # FLY\u4e3b\u677fID\nserial: /dev/serial/by-id/usb-Klipper_stm32f072xb_************************\n### \u67e5\u8be2usb\u56fa\u4ef6id\u662f\uff1als /dev/serial/by-id/\n### \u628a/dev/serial/by-id/usb-Klipper_stm32f072xb_************************\u66ff\u6362\u67e5\u8be2\u5230\u7684id\n#canbus_uuid: e51d5c71a901\n### \u67e5\u8be2can\u56fa\u4ef6id\u662f\uff1a~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\n### can\u7684id\u9700\u8981\u628aserial\u66ff\u6362\u6210canbus_uuid: \u540e\u9762\u6dfb\u52a0id \n\n#####################################################################\n#                            \u673a\u578b\u548c\u52a0\u901f\u5ea6                            #\n#####################################################################\n[printer]                       # \u6253\u5370\u673a\u8bbe\u7f6e\nkinematics: corexy               # \u8fd0\u52a8\u5b66\u7ed3\u6784\u5206\u4e3a\uff1a\u7b1b\u5361\u5c14\u548ccorexy\u7b49\u7b49\u3002\u7b1b\u5361\u5c14\uff1acartesian\nmax_velocity: 300               # \u6253\u5370\u673a\u6700\u5927\u901f\u5ea6   \nmax_accel: 3000                 # \u6700\u5927\u52a0\u901f\u5ea6 \u6700\u59273000\nmax_z_velocity: 15              # z\u8f74\u6700\u5927\u901f\u5ea6\nmax_z_accel: 100                # z\u8f74\u6700\u5927\u52a0\u901f\u5ea6\nsquare_corner_velocity: 5.0     # \u65b9\u5f62\u62d0\u89d2\u901f\u5ea6\uff0c\u5c0f\u4e00\u70b9\u53ef\u4ee5\u6709\u6548\u907f\u514d\u5e73\u53f0\u91cd\u5e26\u6765\u7684\u60ef\u6027\n\n#####################################################################\n#                             \u6e29\u5ea6\u76d1\u63a7                               #\n#####################################################################\n[temperature_sensor Fly-D5]       # FLY\u4e3b\u677f\u6e29\u5ea6\nsensor_type: temperature_mcu      # \u5173\u8054mcu\uff08\u9ed8\u8ba4\uff09\n#####################################################################\n#[temperature_sensor FLY-\u03c0]        # \u4e0a\u4f4d\u673a\u6e29\u5ea6\n#sensor_type: temperature_host     # \u5173\u8054\u4e0a\u4f4d\u673a\n\n#####################################################################\n#                              \u70ed\u5e8a\u7f51\u683c\u6821\u51c6\n#####################################################################\n[bed_mesh]\nspeed: 50                    # \u6821\u51c6\u901f\u5ea6\nhorizontal_move_z: 5         # \u63a2\u9488\u524d\u5f80\u4e0b\u4e00\u4e2a\u70b9\u4e4b\u524dZ\u9700\u8981\u62ac\u5347\u7684\u9ad8\nmesh_min: 30,30              # \u6700\u5c0f\u6821\u51c6\u70b9\u5750\u6807x\uff0cy\nmesh_max: 270, 270           # \u6700\u5927\u6821\u51c6\u70b9\u5750\u6807x\uff0cy\nprobe_count: 4,4             # \u91c7\u6837\u70b9\u6570\uff084X4\u4e3a16\u70b9\uff09\nmesh_pps: 2,2                # \u8865\u5145\u91c7\u6837\u70b9\u6570\nalgorithm: bicubic           # \u7b97\u6cd5\u6a21\u578b\nbicubic_tension: 0.2         # \u7b97\u6cd5\u63d2\u503c\u4e0d\u8981\u52a8\n\n#####################################################################\n#             X/Y\u6b65\u8fdb\u7535\u673a\u8bbe\u7f6e (X/Y Stepper Settings)                 # \n#####################################################################\n#                       B__________A\n#                            Z0\n# \n#                          12864      \n\n#####################################################################\n#                  X \u8f74\u6b65\u8fdb\u7535\u673a      (B\u7535\u673a)                       #\n#####################################################################\n## DRIVER0\u7535\u673a\u4f4d\u7f6e\n[stepper_x]\nstep_pin: PC15                       # X\u8f74\u7535\u673a\u8109\u51b2\u5f15\u811a\u8bbe\u7f6e\ndir_pin: PC14                        # X\u8f74\u7535\u673a\u8fd0\u884c\u5f15\u811a\u8bbe\u7f6e,\u65b9\u5411\u6309\u5b9e\u9645\u5224\u65ad\uff0c\u52a0\u611f\u53f9\u53f7\u4f1a\u8ba9\u8fd0\u884c\u65b9\u5411\u53cd\u8f6c\nenable_pin: !PC2                   # X\u8f74\u7535\u673a\u4f7f\u80fd\u5f15\u811a\u8bbe\u7f6e,\u4f7f\u80fd\u5f15\u811a\u9700\u8981\u52a0\u611f\u53f9\u53f7\uff0c\u5426\u8005\u7535\u673a\u4e0d\u5de5\u4f5c\nrotation_distance: 40               # \u4e3b\u52a8\u5e26\u8f6e\u5468\u957fmm\uff082GT-20T\u5e26\u8f6e40\uff0c2GT-16T\u5e26\u8f6e32\uff09\nmicrosteps: 16                      # \u7535\u673a\u7ec6\u5206\u8bbe\u7f6e\uff0c\u7ec6\u5206\u8d8a\u9ad8\uff0c\u8d28\u91cf\u8d8a\u9ad8\uff0c\u4f46\u4e3b\u63a7\u8d1f\u8377\u8d8a\u5927\nfull_steps_per_rotation: 200        # \u7535\u673a\u5355\u5708\u6240\u9700\u8109\u51b2\u6570\uff081.8\u5ea6\u7535\u673a:200\uff0c0.9\u5ea6\u7535\u673a:400\uff09\nendstop_pin: ^PB4                    # \u9650\u4f4d\u5f00\u5173PIN\u811a,\u5efa\u8bae\u5e38\u95ed\u63a5\u5e38\u95ed\n#endstop_pin: tmc5160_stepper_x:virtual_endstop        # \u65e0\u9650\u4f4d\u5f52\u96f6\u914d\u7f6e\n###\u63a5\u5e38\u95ed\u540e\u662f\u89e6\u53d1\u72b6\u6001\uff0c\u52a0\u611f\u53f9\u53f7\u53ef\u4ee5\u53cd\u8f6c\u8fd9\u4e2a\u72b6\u6001\uff0c\u4e07\u4e00\u65ad\u7ebf\u65f6\u5019\u53ef\u4ee5\u907f\u514d\u649e\u673a\nposition_min: 0                     # \u8f6f\u9650\u4f4d\u6700\u5c0f\u884c\u7a0b\nposition_endstop: 300               # \u8f6f\u9650\u4f4d\u6700\u5927\u884c\u7a0b (250mm-300mm-350mm)\nposition_max: 300                   # \u673a\u68b0\u9650\u4f4d\u6700\u5927\u884c\u7a0b (250mm-300mm-350mm)\nhoming_speed: 200                   # \u590d\u4f4d\u901f\u5ea6-\u6700\u5927 100\nhoming_retract_dist: 5              # \u7b2c\u4e00\u6b21\u89e6\u53d1\u590d\u4f4d\u5f00\u5173\u4e4b\u540e\u7684\u540e\u9000\u8ddd\u79bb\nhoming_positive_dir: true           # \u590d\u4f4d\u65b9\u5411\uff08\u4e00\u822c\u4e0d\u9700\u8981\u6539\u52a8\uff09\n#####################################################################\n##  \u8bf7\u786e\u4fdd\u9a71\u52a8\u578b\u53f7\u914d\u7f6e\u6b63\u786e (2208 or 2209)\n[tmc2209 stepper_x]\nuart_pin: PC13\ninterpolate: False                  # \u662f\u5426\u5f00\u542f256\u5fae\u6b65\u63d2\u503c\uff08\u5f00\u542f\u662fTrue\uff0c\u5173\u95ed\u662fFalse\uff09\nrun_current: 0.8                    # \u7535\u673a\u8fd0\u884c\u7535\u6d41\u503c\uff08\u5355\u4f4d\uff1amA\uff09\nsense_resistor: 0.110               # \u9a71\u52a8\u91c7\u6837\u7535\u963b\u4e0d\u8981\u6539\nstealthchop_threshold: 0\n#####################################################################\n# [tmc5160 stepper_x]\n# cs_pin: PC13\n# spi_bus: spi2\n# run_current: 1.0                    # \u7535\u673a\u8fd0\u884c\u7535\u6d41\u503c\n# interpolate: False                  # \u662f\u5426\u5f00\u542f256\u5fae\u6b65\u63d2\u503c\uff08\u5f00\u542f\u662fTrue\uff0c\u5173\u95ed\u662fFalse\uff09\n# sense_resistor: 0.075               # \u9a71\u52a8\u91c7\u6837\u7535\u963b\u4e0d\u8981\u6539\uff08\u5982\u679c\u4f7f\u75285160 Pro\uff0c\u8bf7\u5c06\u6570\u503c\u4fee\u6539\u4e3a0.033\uff09\n# stealthchop_threshold: 0\n\n#####################################################################\n#                  Y \u8f74\u6b65\u8fdb\u7535\u673a      (A\u7535\u673a)                       #\n#####################################################################\n## DRIVER1\u7535\u673a\u4f4d\u7f6e\n[stepper_y]\nstep_pin: PA1\ndir_pin: PA0\nenable_pin: !PA2\nrotation_distance: 40\nmicrosteps: 16                       # \u7535\u673a\u7ec6\u5206\u8bbe\u7f6e\uff0c\u7ec6\u5206\u8d8a\u9ad8\uff0c\u8d28\u91cf\u8d8a\u9ad8\uff0c\u4f46\u4e3b\u63a7\u8d1f\u8377\u8d8a\u5927\nfull_steps_per_rotation: 200         # \u7535\u673a\u5355\u5708\u6240\u9700\u8109\u51b2\u6570\uff081.8\u5ea6\u7535\u673a:200\uff0c0.9\u5ea6\u7535\u673a:400\uff09\nendstop_pin: ^PB3                    # \u9650\u4f4d\u5f00\u5173PIN\u811a,\u5efa\u8bae\u5e38\u95ed\u7136\u540e\u6dfb\u52a0\uff01\u53cd\u8f6c\u72b6\u6001\n#endstop_pin: tmc5160_stepper_x:virtual_endstop        # \u65e0\u9650\u4f4d\u5f52\u96f6\u914d\u7f6e\n###\u63a5\u5e38\u95ed\u540e\u662f\u89e6\u53d1\u72b6\u6001\uff0c\u52a0\u611f\u53f9\u53f7\u53ef\u4ee5\u53cd\u8f6c\u8fd9\u4e2a\u72b6\u6001\uff0c\u4e07\u4e00\u65ad\u7ebf\u65f6\u5019\u53ef\u4ee5\u907f\u514d\u649e\u673a\nposition_min: 0\nposition_endstop: 300\nposition_max: 300\nhoming_speed: 200\nhoming_retract_dist: 5\nhoming_positive_dir: true\n#####################################################################\n##  \u8bf7\u786e\u4fdd\u9a71\u52a8\u578b\u53f7\u914d\u7f6e\u6b63\u786e (2209 or 5160)\n[tmc2209 stepper_y]\nuart_pin: PC3\ninterpolate: False                  # \u662f\u5426\u5f00\u542f256\u5fae\u6b65\u63d2\u503c\uff08\u5f00\u542f\u662fTrue\uff0c\u5173\u95ed\u662fFalse\uff09\nrun_current: 0.8                    # \u7535\u673a\u8fd0\u884c\u7535\u6d41\u503c\uff08\u5355\u4f4d\uff1amA\uff09\nsense_resistor: 0.110               # \u9a71\u52a8\u91c7\u6837\u7535\u963b\u4e0d\u8981\u6539\nstealthchop_threshold: 0\n#####################################################################\n#[tmc5160 stepper_y]\n#cs_pin: PC3\n#spi_bus: spi2                       # SPI \u901a\u8baf\u603b\u7ebf\u5b9a\u4e49\n#run_current: 1.0                    # \u7535\u673a\u8fd0\u884c\u7535\u6d41\u503c\n#interpolate: False                  # \u662f\u5426\u5f00\u542f256\u5fae\u6b65\u63d2\u503c\uff08\u5f00\u542f\u662fTrue\uff0c\u5173\u95ed\u662fFalse\uff09\n#sense_resistor: 0.075               # \u9a71\u52a8\u91c7\u6837\u7535\u963b\u4e0d\u8981\u6539\uff08\u5982\u679c\u4f7f\u75285160 Pro\uff0c\u8bf7\u5c06\u6570\u503c\u4fee\u6539\u4e3a0.033\uff09\n#stealthchop_threshold: 0 \n\n#####################################################################\n#                     Z\u8f74\u6b65\u8fdb\u7535\u673a \uff08Z Stepper Settings\uff09             #\n#####################################################################\n## DRIVER2\u7535\u673a\u4f4d\u7f6e\n[stepper_z]\nstep_pin: PA5\ndir_pin: !PA4\nenable_pin: !PA6\nrotation_distance: 8         # \u4e1d\u6746\u5bfc\u7a0b\u4e3a 8\uff0c\u8bf7\u6839\u636e\u4f60\u7684\u5b9e\u9645\u4f7f\u7528\u60c5\u51b5\u4fee\u6539\nmicrosteps: 16\nfull_steps_per_rotation: 200  # \u7535\u673a\u5355\u5708\u6240\u9700\u8109\u51b2\u6570\uff081.8\u5ea6\u7535\u673a:200\uff0c0.9\u5ea6\u7535\u673a:400)\nendstop_pin: ^PD2             # \u9650\u4f4d\u5f00\u5173\u63a5\u53e3\nposition_max: 290             # \u8f6f\u9650\u4f4d\u6700\u5927\u884c\u7a0b (240mm-290mm-340mm)\nposition_endstop: -0.5        \nposition_min: -5              # \u8f6f\u9650\u4f4d\u6700\u5c0f\u884c\u7a0b\uff08\u914d\u7f6e\u55b7\u5634\u6e05\u6d01\u9700\u8981-5\u5de6\u53f3\uff09\nhoming_speed: 10              # \u590d\u4f4d\u901f\u5ea6-\u6700\u5927 20\nsecond_homing_speed: 3        # \u4e8c\u6b21\u590d\u4f4d\u901f\u5ea6-\u6700\u5927 10\nhoming_retract_dist: 3        # \u540e\u64a4\u8ddd\u79bb\n#####################################################################\n[tmc2209 stepper_z]\nuart_pin: PA3\ninterpolate: false\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0    # \u9759\u97f3\u9600\u503c\uff08\u5982\u679c\u4e0d\u9700\u8981\u9759\u97f3\uff0c\u8bf7\u5c06\u6570\u503c\u6539\u4e3a0\uff09\n######################################################################\n## DRIVER4\u7535\u673a\u4f4d\u7f6e\n#[stepper_z1]\n#step_pin: PB10\n#dir_pin:  PB2\n#enable_pin: !PB11\n#rotation_distance: 8\n#microsteps: 32\n\n#[tmc2209 stepper_z1]\n#uart_pin: PB1\n#interpolate: false\n#run_current: 1.0\n#sense_resistor: 0.110\n#stealthchop_threshold: 0    \n\n\n#####################################################################\n#                             \u6324\u51fa\u673a\u914d\u7f6e\n#####################################################################\n## DRIVER7\u7535\u673a\u4f4d\u7f6e\n[extruder]                          # \u6324\u51fa\u673a\nstep_pin:PC5\ndir_pin:PC4\nenable_pin: !PB0\nmicrosteps: 16\nfull_steps_per_rotation: 200        # \u5355\u5708\u8109\u51b2\u6570 \uff08200 \u4e3a 1.8 \u5ea6, 400 \u4e3a 0.9 \u5ea6\uff09\nrotation_distance: 22.52245         # \u4e3b\u52a8\u5e26\u8f6e\u5468\u957fmm\n# \u6821\u51c6\u6b65\u8fdb\u503c: 23.1325301 = \u65e7\u503c22.6789511*\u5b9e\u9645\u503c102/\u76ee\u6807\u503c100\ngear_ratio: 50:10                   # \u51cf\u901f\u6bd4\uff08\u4f3d\u5229\u7565\u9f7f\u6bd47.5:1 \u5e76\u4e14\u8fd9\u884c\u6ce8\u91ca\u6389\uff1bBMG\u4e3a50\uff1a17\uff0c\u8f93\u51fa\u8f74\u5728\u524d\uff0c\u8f93\u5165\u8f74\u5728\u540e\uff09\nnozzle_diameter: 0.400              # \u55b7\u5634\u76f4\u5f84\nfilament_diameter: 1.750            # \u8017\u6750\u76f4\u5f84\nheater_pin: PC6                     # \u6324\u51fa\u5934\u52a0\u70ed\u68d2\u63a7\u5236Pin\u811a\u8bbe\u7f6e(e0)\nsensor_type: Generic 3950           # \u4f20\u611f\u5668\u578b\u53f7\nsensor_pin: PC1                     # \u6324\u51fa\u5934\u4f20\u611f\u5668Pin\u811a\uff08T_E0\uff09\nmax_power: 1.0                      # \u52a0\u70ed\u68d2PWM\u6700\u5927\u8f93\u51fa\u529f\u7387\nmin_temp: -235                      # \u6324\u51fa\u673a\u6700\u5c0f\u6e29\u5ea6\nmax_temp: 500                       # \u6324\u51fa\u673a\u6700\u5927\u6e29\u5ea6\nmin_extrude_temp: 150               # \u52a0\u70ed\u68d2\u6700\u4f4e\u6324\u51fa\u6e29\u5ea6\uff08\u8fbe\u5230\u6b64\u6e29\u5ea6\u6324\u51fa\u673a\u624d\u80fd\u6709\u6324\u51fa\u52a8\u4f5c\uff09\npressure_advance: 0.04              # \u6324\u51fa\u673a\u538b\u529b\u63d0\u524d\u53c2\u6570\npressure_advance_smooth_time:0.040  # \u5e73\u7a33\u63a8\u8fdb\u65f6\u95f4-\u9ed8\u8ba4\u503c\u4e3a0.040\n#\u55b7\u5634\u6e29\u5ea6PID\u6821\u51c6\u547d\u4ee4\uff1a  "PID_CALIBRATE HEATER=extruder TARGET=245\ncontrol = pid\npid_kp = 26.213\npid_ki = 1.304\npid_kd = 131.721\n\n[tmc2209 extruder]\nuart_pin:PA7\ninterpolate: False\nrun_current: 0.6\nsense_resistor: 0.110\nstealthchop_threshold: 0            # \u9759\u97f3\u9600\u503c\uff08\u5982\u679c\u4e0d\u9700\u8981\u9759\u97f3\uff0c\u8bf7\u5c06\u6570\u503c\u6539\u4e3a0\uff09\n\n#####################################################################\n#                            \u70ed\u5e8a\u914d\u7f6e\n#####################################################################\n[heater_bed]\nheater_pin: PC7              # \u70ed\u5e8a\u63a5\u53e3\nsensor_type: Generic 3950    # \u70ed\u5e8a\u4f20\u611f\u5668\u7c7b\u578b\nsensor_pin: PC0              # \u70ed\u5e8a\u4f20\u611f\u5668\u63a5\u53e3\nmax_power: 1.0               # \u70ed\u5e8a\u529f\u7387\nmin_temp: -235               # \u70ed\u5e8a\u6700\u5c0f\u6e29\u5ea6\nmax_temp: 500                # \u70ed\u5e8a\u6700\u5927\u6e29\u5ea6\n# \u70ed\u5e8a\u6e29\u5ea6PID\u6821\u51c6\u547d\u4ee4\uff1a  "PID_CALIBRATE HEATER=heater_bed TARGET=100"\ncontrol: pid\npid_kp: 58.437\npid_ki: 2.347\npid_kd: 363.769\n#####################################################################\n#                             \u98ce\u6247\u914d\u7f6e\n#####################################################################\n[fan]                        # \u6a21\u578b\u51b7\u5374\u98ce\u6247\npin:PC9\nkick_start_time: 1.0         # \u542f\u52a8\u65f6\u95f4\uff08\u52ff\u52a8\uff09\noff_below: 0.10              # \u52ff\u52a8\nmax_power: 1.0\n#####################################################################\n[heater_fan \u5589\u7ba1\u6563\u70ed]         # \u5589\u7ba1\u51b7\u5374\u98ce\u6247\npin:PC8\nmax_power: 1.0\nkick_start_time: 0.5         # \u542f\u52a8\u65f6\u95f4\uff08\u52ff\u52a8\uff09\nheater: extruder             # \u5173\u8054\u7684\u8bbe\u5907\uff1a\u6324\u51fa\u673a\nheater_temp: 50              # \u6324\u51fa\u673a\u8fbe\u5230\u591a\u5c11\u5ea6\u542f\u52a8\u98ce\u6247\nfan_speed: 1.0\n\n#####################################################################\n#                           \u95f2\u7f6e\u5173\u95ed\u70ed\u5e8a                             #\n#####################################################################\n[idle_timeout]\ntimeout: 1800                # \u7a7a\u95f2\u65f6\u95f4\u8d85\u8fc730\u5206\u949f\u5219\u5173\u95ed\u70ed\u5e8a\n\n#####################################################################\n#                           \u8c03\u5e73\u4f20\u611f\u5668                               #\n#####################################################################\n#\u9ed8\u8ba4PL08N\u611f\u5e94\u63a2\u5934\u4e0d\u4f4e\u4e8e\u55b7\u5634\u9ad8\u5ea6\uff0c\u4ec5\u7528\u4e8e\u8c03\u5e73,\u5982\u679c\u4f60\u7684PL08N\u662fNO\uff08\u5e38\u5f00\uff09\uff0c\u8bf7\u5c06\u66f4\u6539pin\u6dfb\u52a0\u5230\uff01\n[probe]\npin: ^PB5                   # \u9650\u4f4d\u5f00\u5173PIN\u811a,\u5efa\u8bae\u5e38\u95ed\u7136\u540e\u6dfb\u52a0\uff01\u53cd\u8f6c\u72b6\u6001,\u4f4d\u7f6e\u5728io-2\nx_offset: 0                  # X\u8f74-\u4f20\u611f\u5668\u76f8\u5bf9\u55b7\u5634\u504f\u79fb\u91cf\ny_offset: 25.0               # Y\u8f74-\u4f20\u611f\u5668\u76f8\u5bf9\u55b7\u5634\u504f\u79fb\u91cf\nz_offset: 0                  # Z\u8f74-\u4f20\u611f\u5668\u76f8\u5bf9\u55b7\u5634\u504f\u79fb\u91cf\nspeed: 10.0                  # \u8c03\u5e73\u901f\u5ea6\nsamples: 3                   # \u91c7\u6837\u6b21\u6570\nsamples_result: median       # \u53d6\u503c\u65b9\u5f0f\uff08\u9ed8\u8ba4median-\u4e2d\u4f4d\u6570\uff09\nsample_retract_dist: 4.0     # \u8c03\u5e73\u56de\u7f29\u8ddd\u79bb\nsamples_tolerance: 0.007     # \u91c7\u6837\u516c\u5dee\uff08\u6ce8\u610f\u8fc7\u5c0f\u7684\u503c\u53ef\u80fd\u9020\u6210\u91c7\u6837\u6b21\u6570\u589e\u52a0\uff09\nsamples_tolerance_retries: 3 # \u8d85\u516c\u5dee\u91cd\u8bd5\u6b21\u6570\n#####################################################################\n# [bltouch]\n# sensor_pin: ^PB5             # \u4fe1\u53f7\u63a5\u53e3\n# control_pin: PA8             # \u8235\u673a\u63a7\u5236\n# x_offset: 0                  # X\u8f74-\u4f20\u611f\u5668\u76f8\u5bf9\u55b7\u5634\u504f\u79fb\u91cf\n# y_offset: 25.0               # Y\u8f74-\u4f20\u611f\u5668\u76f8\u5bf9\u55b7\u5634\u504f\u79fb\u91cf\n# z_offset: 0                  # Z\u8f74-\u4f20\u611f\u5668\u76f8\u5bf9\u55b7\u5634\u504f\u79fb\u91cf\n\n#####################################################################\n#                               \u5f52\u4f4d                                #\n#####################################################################\n[safe_z_home]                # Z\u8f74\u9650\u4f4d\u5750\u6807\nhome_xy_position:206,300     # Z\u8f74\u9650\u4f4d\u4f4d\u7f6e\u5b9a\u4e49\uff08\u91cd\u8981\uff01\uff01\uff01\u81ea\u884c\u8fdb\u884c\u8c03\u6574\uff09\nspeed:100                    # \u5f52\u4f4d\u901f\u5ea6\nz_hop:10                     # \u5f52\u4f4d\u4e4b\u524d\u62ac\u5347\u9ad8\u5ea6\n#####################################################################\n#[homing_override]\n#axes: z\n#set_position_z: 0\n#gcode:\n#   G90\n#   G0 Z15 F600\n#   G28 X Y\n#    ## Z \u9650\u4f4d\u5f00\u5173\u7684 XY \u4f4d\u7f6e\n#    ##\u901a\u8fc7\u540e\u5c06X0\u548cY0\u66f4\u65b0\u4e3a\u4f60\u7684\u503c\uff08\u5982X157\u3001Y305\uff09\n#    ## Z \u8f74\u9650\u4f4d\u4f4d\u7f6e\u5b9a\u4e49\n#   G0 X185 Y250 F3600    #250mm   \n#   G28 Z\n#   G0 Z10 F1800\n\n\n#####################################################################\n#                          12864\u914d\u7f6e\uff08\u9700\u8981\u65f6\u542f\u7528\uff09\n#####################################################################\n[board_pins]\naliases:\n    EXP1_1=NC,   EXP1_3=PC11,  EXP1_5=PC10, EXP1_7=NC, EXP1_9=<GND>,\n    EXP1_2=PA15, EXP1_4=PA14,  EXP1_6=PA13, EXP1_8=NC, EXP1_10=<5V>,\n    # EXP2 header\n    EXP2_1=PB14, EXP2_3=PC12, EXP2_5=PB6,   EXP2_7=NC,    EXP2_9=<GND>,\n    EXP2_2=PB13, EXP2_4=PB12, EXP2_6=PB15,  EXP2_8=<RST>, EXP2_10=<NC>,\n#####################################################################    \n[display]\nlcd_type: uc1701                # \u663e\u793a\u5c4f\u9a71\u52a8\u7c7b\u578b\ncs_pin: EXP1_3                  # \u663e\u793a\u5c4f\u7247\u9009cs\u5f15\u811a\u8bbe\u7f6e\na0_pin: EXP1_4                  # \u663e\u793a\u5c4f\u6570\u636ea0\u5f15\u811a\u8bbe\u7f6e\nrst_pin: EXP1_5                 # \u663e\u793a\u5c4f\u590d\u4f4drst\u811a\u8bbe\u7f6e\ncontrast: 63                    # \u5bf9\u6bd4\u5ea6\nencoder_pins: ^EXP2_5, ^!EXP2_3 # \u65cb\u8f6c\u7f16\u7801\u5668\uff08\u65cb\u94ae\u5f00\u5173\uff09\u5f15\u811a\u8bbe\u7f6e\nclick_pin: ^!EXP1_2             # \u65cb\u8f6c\u7f16\u7801\u5668\uff08\u65cb\u94ae\u5f00\u5173\uff09\u786e\u8ba4\u6309\u952e\u7684\u5f15\u811a\u8bbe\u7f6e\n####################################################################\n####\u9002\u7528\u4e8eFLY Mini12864\n[neopixel fly_mini12864]\npin: EXP1_6                     # \u663e\u793a\u5c4f\u80cc\u5149\u706f\u63a7\u5236\u5f15\u811a\u8bbe\u7f6e\nchain_count: 3\ninitial_RED: 0.5                # \u7ea2\u8272LED\u706f\u4eae\u5ea6\u63a7\u5236\uff08\u8303\u56f4\uff1a0-1\uff09\ninitial_GREEN: 0.5              # \u7eff\u8272LED\u706f\u4eae\u5ea6\u63a7\u5236\uff08\u8303\u56f4\uff1a0-1\uff09\ninitial_BLUE: 0.5               # \u84dd\u8272LED\u706f\u4eae\u5ea6\u63a7\u5236\uff08\u8303\u56f4\uff1a0-1\uff09\ncolor_order: RGB                # \u989c\u8272\u987a\u5e8f\n\n#####################################################################\n#                           \u81ea\u5b9a\u4e49gcode\u5b8f                            #\n#####################################################################\n#[gcode_arcs]                       # \u5141\u8bb8\u5706\u5f27\u63d2\u8865\n#resolution: 1.0                    # \u542f\u7528\u5706\u5f27\u63d2\u8865G2\uff0cG3\n#   \u4e00\u6761\u5f27\u7ebf\u5c06\u88ab\u5206\u5272\u6210\u82e5\u5e72\u6bb5\u3002\u6bcf\u6bb5\u7684\u957f\u5ea6\u5c06\n#   \u7b49\u4e8e\u4e0a\u9762\u8bbe\u7f6e\u7684\u5206\u8fa8\u7387\uff08mm\uff09\u3002\u66f4\u4f4e\u7684\u503c\u4f1a\u4ea7\u751f\u4e00\u4e2a\n#   \u66f4\u7ec6\u817b\u7684\u5f27\u7ebf\uff0c\u4f46\u4e5f\u4f1a\u9700\u8981\u673a\u5668\u8fdb\u884c\u66f4\u591a\u8fd0\u7b97\u3002\u5c0f\u4e8e\n#   \u914d\u7f6e\u503c\u7684\u66f2\u7ebf\u4f1a\u88ab\u89c6\u4e3a\u76f4\u7ebf\u3002\n#   \u9ed8\u8ba4\u4e3a1\u6beb\u7c73\u3002\n\n#####################################################################\n[gcode_macro PRINT_START]          # \u5c06 PRINT_START \u8bbe\u7f6e\u4e3a\u5f00\u59cb\u6253\u5370\u65f6\u7684\u5b8f\uff0c\u81ea\u5b9a\u4e49\u6253\u5370\u524d\u7684\u52a8\u4f5c\ngcode:\n    G92 E0                         # \u91cd\u7f6e\u6324\u51fa\n    G28                            # \u5f52\u4f4d\u6240\u6709\u8f74\n    G1 Z20 F3000                   # \u62ac\u9ad8\u9f99\u95e8\n    #SET_LED LED=LEDlight RED=0.2 GREEN=0.2 BLUE=0.5   # LED\u706f\u63a7\u5236\n    #M117 Printing                 # \u5411\u5c4f\u5e55\u53d1\u9001\u6587\u672c\n    \n#####################################################################\n[gcode_macro PRINT_HUAXIAN]        # \u5c06 PRINT_HUAXIAN \u8bbe\u7f6e\u4e3aPRINT_START\u540e\u7684\u5b8f\uff0c\u81ea\u5b9a\u4e49\u6253\u5370\u524d\u7684\u52a8\u4f5c\ngcode:\n    G1 Z5 F3000 \n    G92 E0;              # \u91cd\u7f6e\u6324\u51fa\n    G90                  # \u8bbe\u7f6e\u7edd\u5bf9\u5750\u6807\u4f53\u7cfb\n    G0 X5 Y1 F6000       # \u79fb\u52a8\u81f3x5 y1\u4f4d\u7f6e\uff0c\u901f\u5ea6100mm/s\uff08F6000\uff0c\u610f\u601d\u4e3a6000mm\u6bcf\u5206\u949f\uff09\n    G0 Z0.4              # \u79fb\u52a8z\u8f74\u9ad8\u5ea6\u81f30.4\n    G91                  # \u8bbe\u7f6e\u5750\u6807\u4f53\u7cfb\u4e3a\u76f8\u5bf9\u5750\u6807\n    G1 X100 E20 F1200;   # \u79fb\u52a8x\u8f74100mm\uff0c\u5e76\u6324\u51fa\uff0c\u66f4\u6539F\u53ef\u66f4\u6539\u6324\u51fa\u7387\n    G1 Y1                # \u79fb\u52a8y\u8f741mm\n    G1 X-100 E20 F1200;  # \u53cd\u65b9\u5411\u79fb\u52a8x\u8f74100mm\uff0c\u5e76\u6324\u51fa\uff0c\u66f4\u6539F\u53ef\u66f4\u6539\u6324\u51fa\u7387\n    G0 z5                # \u62ac\u9ad8z\u8f745mm\n    G1 E-5.0 F3600       # \u7f29\u56de\u8017\u6750\u4e1d\n    G92 E0;              # \u91cd\u7f6e\u6324\u51fa\n    G90                  # \u8bbe\u7f6e\u7edd\u5bf9\u5750\u6807\u4f53\u7cfb \n\n#####################################################################\n[gcode_macro PRINT_END]            # \u5c06 PRINT_END \u8bbe\u7f6e\u4e3a\u6253\u5370\u7ed3\u675f\u65f6\u7684\u5b8f\uff0c\u81ea\u5b9a\u4e49\u6253\u5370\u5b8c\u6210\u4e4b\u540e\u52a8\u4f5c\ngcode:\n    #   Get Boundaries\n    {% set max_x = printer.configfile.config["stepper_x"]["position_max"]|float %}\n    {% set max_y = printer.configfile.config["stepper_y"]["position_max"]|float %}\n    {% set max_z = printer.configfile.config["stepper_z"]["position_max"]|float %}\n    \n    #   Check end position to determine safe directions to move\n    {% if printer.toolhead.position.x < (max_x - 20) %}\n        {% set x_safe = 20.0 %}\n    {% else %}\n        {% set x_safe = -20.0 %}\n    {% endif %}\n\n    {% if printer.toolhead.position.y < (max_y - 20) %}\n        {% set y_safe = 20.0 %}\n    {% else %}\n        {% set y_safe = -20.0 %}\n    {% endif %}\n\n    {% if printer.toolhead.position.z < (max_z - 2) %}\n        {% set z_safe = 2.0 %}\n    {% else %}\n        {% set z_safe = max_z - printer.toolhead.position.z %}\n    {% endif %}\n    \n    M400                              # \u7b49\u5f85\u7f13\u51b2\u533a\u6e05\u9664\n    G92 E0                            # \u5c06\u6324\u51fa\u673a\u5f52\u96f6\n    G1 E-10.0 F3600                   # \u7f29\u56de\u8017\u6750\u4e1d\n    G91                               # \u76f8\u5bf9\u5b9a\u4f4d\n    G0 Z{z_safe} F3600                # \u62ac\u9ad8\u9f99\u95e8\n    G0 X{x_safe} Y{y_safe} F20000     # \u79fb\u52a8\u55b7\u5634\u4ee5\u79fb\u9664\u67b6\u7ebf\n    M104 S0                           # \u5173\u95ed\u6324\u51fa\u5934\n    M140 S0                           # \u5173\u95ed\u70ed\u5e8a\n    M106 S0                           # \u5173\u95ed\u6a21\u578b\u98ce\u6247\n    G90                               # \u8bbe\u7f6e\u7edd\u5bf9\u5750\u6807\u4f53\u7cfb\n    G0 X{max_x / 2} Y{max_y} F3600    # \u5c06\u55b7\u5634\u505c\u5728\u540e\u90e8\n    BED_MESH_CLEAR                    # \u5378\u8f7d\u7f51\u5e8a\n\n\n'})})]})}function c(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}}}]);