"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[7941],{70832:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>_,toc:()=>p});var r=t(74848),i=t(28453);const o={sidebar_position:4},s="VORON 2.4 \u53c2\u8003\u914d\u7f6e",_={id:"DebugDoc/ref-config/voron2.4",title:"VORON 2.4 \u53c2\u8003\u914d\u7f6e",description:"",source:"@site/docs/DebugDoc/ref-config/voron2.4.mdx",sourceDirName:"DebugDoc/ref-config",slug:"/DebugDoc/ref-config/voron2.4",permalink:"/fly-docs-next/ko/docs/DebugDoc/ref-config/voron2.4",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/ref-config/voron2.4.mdx",tags:[],version:"current",lastUpdatedBy:"fenghua",lastUpdatedAt:1721122958e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"debugdocSidebar",previous:{title:"\u52a0\u70ed\u5bb9\u5dee\u914d\u7f6e",permalink:"/fly-docs-next/ko/docs/DebugDoc/ref-config/verify_heater"},next:{title:"VORON Trident \u53c2\u8003\u914d\u7f6e",permalink:"/fly-docs-next/ko/docs/DebugDoc/ref-config/trident"}},a={},p=[];function d(n){const e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"voron-24-\u53c2\u8003\u914d\u7f6e",children:"VORON 2.4 \u53c2\u8003\u914d\u7f6e"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cfg",children:'\n#####################################################################\n#      Items to be changed/checked\n#####################################################################\n##***\u9700\u8981\u66f4\u6539/\u68c0\u67e5\u7684\u4e8b\u9879\uff1a***\n## MCU \u8def\u5f84                                [mcu] \n## \u6253\u5370\u673a\u6d3b\u52a8\u8303\u56f4                           xyz\u7684position   \n## \u70ed\u654f\u7535\u963b\u7c7b\u578b                             [extruder] \u548c [heater_bed]\n## Z\u8f74\u9650\u4f4d\u5f00\u5173\u505c\u6b62\u4f4d\u7f6e                      [safe_z_home] \n## Z\u8f74\u9650\u4f4d\u5f00\u5173\u504f\u79fb\u4f4d\u7f6e                      [stepper_z] \n## PID \u6821\u51c6                               [extruder] \u548c [heater_bed] \n## \u5fae\u8c03\u6324\u51fa\u673a\u7535\u673a\u6b65\u8fdb\u503c                     [extruder] \n\n#####################################################################\n#      file invocation\n#####################################################################\n### \u5f53\u60a8\u4f7f\u7528fuidd\u6216\u8005mainsail\u4f5c\u4e3a\u524d\u7aef\u65f6\uff0c\u8bf7\u5220\u9664#[include XXX.cfg]\u524d\u9762\u7684#\u3002\n### When using fuidd or mainsail as the frontend, remove the \'#\' before #[include XXX.cfg].\n[include fluidd.cfg]\n#[include mainsail.cfg]\n\n### \u4e0b\u9762/home/fly\u4e2d\u7684fly\u9700\u8981\u66ff\u6362\u6210\u4f60\u7684\u4e0a\u4f4d\u673a\u7528\u6237\uff0c\u8bf7\u6ce8\u610f\u4e0d\u662fROOT\u7528\u6237\n### Replace \'fly\' in /home/fly with your host computer username, ensuring it\'s not the ROOT user.\n[virtual_sdcard]\npath: /home/fly/printer_data/gcodes\non_error_gcode: CANCEL_PRINT\n\n\n#####################################################################\n#      Master ID Configuration\n#####################################################################\n[mcu]\nserial: /dev/serial/by-id/usb-Klipper_rp2040_MELLOW-if00\n### \u4f7f\u7528is/dev/Serial/by-id/*\u67e5\u627eUSB\u56fa\u4ef6ID\uff0c\u5e76\u5c06\n### /dev/serial/by-id/usb-Klipper_rp2040_MELLOW-if00\u66ff\u6362\u4e3a\u60a8\u53d1\u73b0\u7684ID\u3002\n### Find the USB firmware ID with: ls /dev/serial/by-id/* and replace\n### /dev/serial/by-id/usb-Klipper_rp2040_MELLOW-if00 with the ID you discover.\n\n#canbus_uuid: 114514114514\n### \u67e5\u8be2can\u56fa\u4ef6id\u662f\uff1a~/klippy#env/bin/python ~/klipper/scripts/canbus_query.py can0\n### can\u7684id\u9700\u8981\u628aserial: \u66ff\u6362\u6210canbus_uuid: \u540e\u9762\u6dfb\u52a0id \n### Query the CAN firmware ID with: ~/klippy#env/bin/python ~/klipper/scripts/canbus_query.py can0\n### Replace \'serial:\' in the CAN ID with \'canbus_uuid:\', then append the ID.\n\n#####################################################################\n#      Temperature monitoring\n#####################################################################\n[temperature_sensor motherboard]\nsensor_type: temperature_mcu\n\n[temperature_sensor Raspberry Pi]\nsensor_type: temperature_host\n\n#####################################################################\n#      Tmodel and acceleration\n#####################################################################\n[printer]\nkinematics: corexy\nmax_velocity: 300\nmax_accel: 2000\nmax_z_velocity: 15\nmax_z_accel: 300\nsquare_corner_velocity: 6.0\n\n#####################################################################\n#      X/Y Stepper Settings\n#####################################################################\n\n[stepper_x]\n## Refer to https://docs.vorondesign.com/build/startup/#v0\nstep_pin:\ndir_pin:                                        # Check motor direction in link above. If inverted, add a ! before gpio3 \nenable_pin:! \nrotation_distance: 40\nmicrosteps: 32\nfull_steps_per_rotation: 200                    # Set to 400 for 0.9\xb0 degree stepper motor, 200 is for 1.8\xb0 stepper motors\nendstop_pin:\n# endstop_pin: tmc2209_stepper_x:virtual_endstop\n# endstop_pin: tmc5160_stepper_x:virtual_endstop\nposition_min: 0\nposition_endstop: 300                           # (250mm-300mm-350mm)\nposition_max: 300                               # (250mm-300mm-350mm)\nhoming_speed: 40                                # for sensorless homing it is recommended not to go above 40mm/s   \nhoming_retract_dist: 0\nhoming_positive_dir: true\n\n[tmc2209 stepper_x]\nuart_pin:\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0                        # Set to 999999 to turn stealthchop on, and 0 to use spreadcycle\ndiag_pin: ^\ndriver_SGTHRS: 80\n\n[tmc5160 stepper_x]\ncs_pin:\n### spi_bus\u4e0espi_software\u53ea\u80fd\u4f7f\u7528\u5176\u4e2d\u4e00\u4e2a\n### spi_bus and spi_software can only use one of them.\n# spi_bus:\nspi_software_mosi_pin:\nspi_software_miso_pin:\nspi_software_sclk_pin:\nrun_current: 1.0\ninterpolate: False\n### \u9a71\u52a8\u91c7\u6837\u7535\u963b\u9700\u8981\u6309\u7740\u9a71\u52a8\u6765\u4fee\u6539\n### The driver sampling resistor needs to be modified according to the driver\nsense_resistor: 0.075\nstealthchop_threshold: 0\ndiag0_pin: ^!\ndriver_SGT: 1\n\n[stepper_y]\n## Refer to https://docs.vorondesign.com/build/startup/#v0\nstep_pin:\ndir_pin:                                        # Check motor direction in link above. If inverted, add a ! before gpio0\nenable_pin:!\nrotation_distance: 40\nmicrosteps: 32\nfull_steps_per_rotation: 200\nendstop_pin:\n# endstop_pin: tmc2209_stepper_y:virtual_endstop\n# endstop_pin: tmc5160_stepper_y:virtual_endstop\nposition_min: 0\nposition_endstop: 300\nposition_max: 300\nhoming_speed: 40 \nhoming_retract_dist: 0\nhoming_positive_dir: true\n\n[tmc2209 stepper_y]\nuart_pin:\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\ndiag_pin: ^\ndriver_SGTHRS: 80\n\n[tmc5160 stepper_y]\ncs_pin:\n### spi_bus\u4e0espi_software\u53ea\u80fd\u4f7f\u7528\u5176\u4e2d\u4e00\u4e2a\n### spi_bus and spi_software can only use one of them.\n# spi_bus:\nspi_software_mosi_pin:\nspi_software_miso_pin:\nspi_software_sclk_pin:\nrun_current: 1.0\ninterpolate: False\n### \u9a71\u52a8\u91c7\u6837\u7535\u963b\u9700\u8981\u6309\u7740\u9a71\u52a8\u6765\u4fee\u6539\n### The driver sampling resistor needs to be modified according to the driver\nsense_resistor: 0.075\nstealthchop_threshold: 0\ndiag0_pin: ^!\ndriver_SGT: 1\n\n#####################################################################\n#      Z Stepper Settings\n#####################################################################\n[stepper_z]\n## Refer to https://docs.vorondesign.com/build/startup/#v0\nstep_pin:\ndir_pin:!                                         # Check motor direction in link above. If inverted, add a ! before gpio25\nenable_pin: !\nrotation_distance: 8\nmicrosteps: 32\nendstop_pin: ^\n# endstop_pin: probe:z_virtual_endstop  \nposition_endstop:-0.5\nposition_max: 270\nposition_min: -15\nhoming_speed: 20\nsecond_homing_speed: 3.0\nhoming_retract_dist: 3.0\n\n[tmc2209 stepper_z]\nuart_pin:\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n[stepper_z1]\nstep_pin: \ndir_pin:\nenable_pin: !\nrotation_distance: 40\ngear_ratio: 80:16\nfull_steps_per_rotation: 200\nmicrosteps: 16\n\n\n[tmc2209 stepper_z1]\nuart_pin:\ninterpolate: false\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n##    Z2 \u6b65\u8fdb\u7535\u673a - \u53f3\u540e\u65b9 on Driver5\n[stepper_z2]\nstep_pin:\ndir_pin:\nenable_pin:!\nrotation_distance: 40\ngear_ratio: 80:16\nfull_steps_per_rotation: 200\nmicrosteps: 16\n\n\n[tmc2209 stepper_z2]\nuart_pin:\ninterpolate: false\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n\n[stepper_z3]\nstep_pin: \ndir_pin: \nenable_pin: !\nrotation_distance: 40\ngear_ratio: 80:16\nfull_steps_per_rotation: 200\nmicrosteps: 16\n\n\n[tmc2209 stepper_z3]\nuart_pin: \ninterpolate: false\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n\n\n#####################################################################\n#      Extruder\n#####################################################################\n[extruder]\n## Type of sensor # common thermistors are (Generic 3950, ATC Semitec 104GT#2)\n## \u4f20\u611f\u5668\u7c7b\u578b#\u5e38\u89c1\u7684\u70ed\u654f\u7535\u963b\u5668\u662f (Generic 3950, ATC Semitec 104GT#2)\nsensor_type: ATC Semitec 104GT-2\nsensor_pin: \n#####################################################################\n## If using PT1000, please connect the jumper next to the thermal sensitivity.\n## \u5982\u679c\u4f7f\u7528PT1000\u8bf7\u5c06\u70ed\u654f\u65c1\u8fb9\u8df3\u7ebf\u63a5\u4e0a\n# sensor_type:PT1000\n# pullup_resistor: 1100\n# sensor_pin: \n#####################################################################\n#      extruder\n#####################################################################\n## https://www.klipper3d.org/Config_Reference.html#extruder\n[extruder]\nstep_pin:\ndir_pin:\nenable_pin: !\nrotation_distance: 21.84\n## rotation_distance = The original rotation_distance multiplied by the actual extrusion length divided by the requested extrusion length.\n## \u6821\u51c6\u6b65\u8fdb\u503c: 22.44=\u65e7\u503c22*\u5b9e\u9645\u503c102/\u76ee\u6807\u503c100\ngear_ratio:50:10\n## \u51cf\u901f\u6bd4\uff08\u4f3d\u5229\u7565\u9f7f\u6bd47.5:1 \u5e76\u4e14\u8fd9\u884c\u6ce8\u91ca\u6389\uff1bBMG\u4e3a50\uff1a17\uff0c\u8f93\u51fa\u8f74\u5728\u524d\uff0c\u8f93\u5165\u8f74\u5728\u540e\uff09\nmicrosteps:16\nfull_steps_per_rotation: 200    \nnozzle_diameter:0.400\nfilament_diameter:1.75\nheater_pin:\nmin_temp: -50\nmax_temp: 300\nmax_power: 1.0\nmin_extrude_temp: 150\npressure_advance: 0.05\n##Pressure in advance\n##\u538b\u529b\u63d0\u524d\n##https://www.klipper3d.org/zh/Pressure_Advance.html\npressure_advance_smooth_time: 0.040\n#max_extrude_only_distance: 200.0   # \u6324\u51fa\u6d41\u91cf\u62a5\u9519\u53ef\u4ee5\u6ce8\u91ca\u8fd9\u4e2a\uff0c\u4f46\u662f\u5efa\u8bae\u91cd\u65b0\u5207\u7247\n# \u55b7\u5634\u6e29\u5ea6PID\u6821\u51c6\u547d\u4ee4\uff1a PID_CALIBRATE HEATER=extruder TARGET=245\n# Calibrate the nozzle temperature PID command \uff1a PID_CALIBRATE HEATER=extruder TARGET=245\ncontrol: pid\npid_kp: 26.213\npid_ki:1.304\npid_kd: 131.721\nstep_pulse_duration: 0.000004\n\n[tmc2209 extruder]\nuart_pin:gpio9\nuart_address:3\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n\n#####################################################################\n#      Bed Heater\n#####################################################################\n[heater_bed]\nheater_pin: \n## Check what thermistor type you have. See https://www.klipper3d.org/Config_Reference.html#common#thermistors for common thermistor types.\n## Use "Generic 3950" for Keenovo heaters\nsensor_type:\nsensor_pin:\nmax_power: 1.0 \nmin_temp: -50\nmax_temp: 120\n# \u70ed\u5e8a\u6e29\u5ea6PID\u6821\u51c6\u547d\u4ee4\uff1a PID_CALIBRATE HEATER=heater_bed TARGET=100\n# Calibrate the heated bed temperature PID command\uff1a PID_CALIBRATE HEATER=heater_bed TARGET=100\ncontrol: pid\npid_kp: 68.453\npid_ki: 2.749\npid_kd: 426.122\n\n#####################################################################\n#      Fan Control\n#####################################################################\n[fan]\npin: \nmax_power: 1.0\nkick_start_time: 0.5                                                # Depending on your fan, you may need to increase this value if your fan will not start\noff_below: 0.13\ncycle_time: 0.010\n#####################################################################\n[heater_fan hotend_fan]\npin: \nmax_power: 1.0\nkick_start_time: 0.5\nheater: extruder\nheater_temp: 50.0\n\n#####################################################################\n#      Filament Runout Sensor\n#####################################################################\n#[filament_switch_sensor Filament_Runout_Sensor]\n#pause_on_runout: True\n#runout_gcode: PAUSE\n#switch_pin: \n\n#####################################################################\n#      Probe\n#####################################################################\n### TAP\n[probe]\npin:\nx_offset: 0\ny_offset: 0\n# z_offset: 0\nspeed: 10.0\nsamples: 3\nsamples_result: median\nsample_retract_dist: 4.0\nsamples_tolerance: 0.006\nsamples_tolerance_retries: 3\n\n### EDDY\n# [probe_eddy_current fly_eddy_probe]\n# sensor_type: ldc1612\n# z_offset: 0.8\n# i2c_address: 43\n# i2c_mcu:\n# i2c_bus:\n# x_offset: 0\n# y_offset: 0\n# speed:40\n# lift_speed: 5\n\n\n#####################################################################\n#      Homing and Gantry Adjustment Routines\n#####################################################################\n### \u53ea\u80fd\u4f7f\u7528safe_z_home\u6216homing_override\u4e2d\u7684\u4e00\u4e2a\n### You can only use either safe_z_home or homing_override\n#[safe_z_home]\n#home_xy_position: 206,300\n#speed: 100\n#z_hop: 5\n\n#[homing_override]\n#axes: z\n#set_position_z: 0\n#gcode:\n#   G90\n#   G0 Z15 F600\n#   G28 X Y\n#    ## Z \u9650\u4f4d\u5f00\u5173\u7684 XY \u4f4d\u7f6e\n#    ##\u901a\u8fc7\u540e\u5c06X0\u548cY0\u66f4\u65b0\u4e3a\u4f60\u7684\u503c\uff08\u5982X157\u3001Y305\uff09\n#    ## Z \u8f74\u9650\u4f4d\u4f4d\u7f6e\u5b9a\u4e49\n#   G0 X185 Y250 F3600    #250mm   \n#   G28 Z\n#   G0 Z10 F1800\n\n#####################################################################\n#      quad_gantry_level\n#####################################################################\n[quad_gantry_level]\n#gantry_corners:\n#    -60,-10\n#    310,320\n#points:                      # 250mm\n#    50,25\n#    50,175\n#    200,175\n#    200,25\n\ngantry_corners:              # 300mm\n   -60,-10\n   360,370\npoints:\n   50,25\n   50,225\n   250,225\n   250,25\n\n#gantry_corners:              # 350mm\n#    -60,-10\n#    410,420\n#points:\n#    50,25\n#    50,275\n#    300,275\n#    300,25\n\nspeed: 100\nhorizontal_move_z: 1\nretry_tolerance: 0.0075\nretries: 5\nmax_adjust: 10\n\n\n#####################################################################\n# Macros\n#####################################################################\n[idle_timeout]\n### \u5982\u679c\u7a7a\u95f2\u8d85\u8fc730\u5206\u949f\uff0c\u5219\u5173\u95ed\u52a0\u70ed\u5e8a\u3002\n### If idle for more than 30 minutes, heated bed will be turned off.\ntimeout: 1800 \n\n[gcode_arcs]\n### \u5141\u8bb8\u5706\u5f27\u63d2\u8865\n### Allowing arc interpolation\nresolution: 1.0 \n\n[gcode_macro PRINT_START]          \n### \u5c06 PRINT_START \u8bbe\u7f6e\u4e3a\u5f00\u59cb\u6253\u5370\u65f6\u7684\u5b8f\uff0c\u81ea\u5b9a\u4e49\u6253\u5370\u524d\u7684\u52a8\u4f5c\n### Set PRINT_START as a macro for the start of printing, customize actions before printing.\ngcode:\n    G92 E0\n    BED_MESH_CLEAR\n    G28\n    quad_gantry_level\n    G28\n    G1 Z20 F3000\n    #BED_MESH_PROFILE LOAD=default  \n    BED_MESH_CALIBRATE adaptive=1 METHOD=scan SCAN_MODE=rapid\n\n[gcode_macro PRINT_END]            \n### \u5c06 PRINT_END \u8bbe\u7f6e\u4e3a\u6253\u5370\u7ed3\u675f\u65f6\u7684\u5b8f\uff0c\u81ea\u5b9a\u4e49\u6253\u5370\u5b8c\u6210\u4e4b\u540e\u52a8\u4f5c\n### Set PRINT_END as a macro for the end of printing, customize actions after printing completion\ngcode:\n    #   Get Boundaries\n    {% set max_x = printer.configfile.config["stepper_x"]["position_max"]|float %}\n    {% set max_y = printer.configfile.config["stepper_y"]["position_max"]|float %}\n    {% set max_z = printer.configfile.config["stepper_z"]["position_max"]|float %}\n    \n    #   Check end position to determine safe directions to move\n    {% if printer.toolhead.position.x < (max_x - 20) %}\n        {% set x_safe = 20.0 %}\n    {% else %}\n        {% set x_safe = -20.0 %}\n    {% endif %}\n\n    {% if printer.toolhead.position.y < (max_y - 20) %}\n        {% set y_safe = 20.0 %}\n    {% else %}\n        {% set y_safe = -20.0 %}\n    {% endif %}\n\n    {% if printer.toolhead.position.z < (max_z - 2) %}\n        {% set z_safe = 2.0 %}\n    {% else %}\n        {% set z_safe = max_z - printer.toolhead.position.z %}\n    {% endif %}\n \n    M400                              # \u7b49\u5f85\u7f13\u51b2\u533a\u6e05\u9664\n    G92 E0                            # \u5c06\u6324\u51fa\u673a\u5f52\u96f6\n    G1 E-10.0 F3600                   # \u7f29\u56de\u8017\u6750\u4e1d\n    G91                               # \u76f8\u5bf9\u5b9a\u4f4d\n    G0 Z{z_safe} F3600                # \u62ac\u9ad8\u9f99\u95e8\n    G0 X{x_safe} Y{y_safe} F20000     # \u79fb\u52a8\u55b7\u5634\u4ee5\u79fb\u9664\u67b6\u7ebf\n    M104 S0                           # \u5173\u95ed\u6324\u51fa\u5934\n    M140 S0                           # \u5173\u95ed\u70ed\u5e8a\n    M106 S0                           # \u5173\u95ed\u6a21\u578b\u98ce\u6247\n    G90                               # \u8bbe\u7f6e\u7edd\u5bf9\u5750\u6807\u4f53\u7cfb\n    G0 X{max_x / 2} Y{max_y} F3600    # \u5c06\u55b7\u5634\u505c\u5728\u540e\u90e8\n    BED_MESH_CLEAR                    # \u5378\u8f7d\u7f51\u5e8a\n\n\n#*# <---------------------- SAVE_CONFIG ----------------------\x3e\n#*# DO NOT EDIT THIS BLOCK OR BELOW. The contents are auto-generated.\n#*#\n\n'})})]})}function c(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}}}]);