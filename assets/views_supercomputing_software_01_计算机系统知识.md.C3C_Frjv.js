import{_ as a,c as l,o as e,a4 as i}from"./chunks/framework.DhvPBriA.js";const q=JSON.parse('{"title":"第一章 计算机系统知识","description":"","frontmatter":{},"headers":[],"relativePath":"views/supercomputing/software/01_计算机系统知识.md","filePath":"views/supercomputing/software/01_计算机系统知识.md"}'),r={name:"views/supercomputing/software/01_计算机系统知识.md"},o=i('<h1 id="第一章-计算机系统知识" tabindex="-1">第一章 计算机系统知识 <a class="header-anchor" href="#第一章-计算机系统知识" aria-label="Permalink to &quot;第一章 计算机系统知识&quot;">​</a></h1><h2 id="计算机系统知识" tabindex="-1">计算机系统知识 <a class="header-anchor" href="#计算机系统知识" aria-label="Permalink to &quot;计算机系统知识&quot;">​</a></h2><h3 id="计算机系统硬件基本组成" tabindex="-1">计算机系统硬件基本组成 <a class="header-anchor" href="#计算机系统硬件基本组成" aria-label="Permalink to &quot;计算机系统硬件基本组成&quot;">​</a></h3><p>运算器、控制器、存储器、输入设备、输出设备</p><p>运算器、控制器等设备统称为中央处理单元（CPU），用于数据的加工处理，完成各种算术、逻辑运算及控制功能。</p><p>存储器是计算机系统中的记忆设备，分内部存储与外部存储</p><p>输入输出设备合称为外部设备，输入设备用于输入原始指令，输出设备用于输出计算机运行的结果。</p><h3 id="中央处理单元" tabindex="-1">中央处理单元 <a class="header-anchor" href="#中央处理单元" aria-label="Permalink to &quot;中央处理单元&quot;">​</a></h3><p>是计算机的核心部件，负责获取程序指令，对指令进行译码并加以执行。</p><h4 id="cpu的功能" tabindex="-1">CPU的功能 <a class="header-anchor" href="#cpu的功能" aria-label="Permalink to &quot;CPU的功能&quot;">​</a></h4><ol><li>程序控制</li><li>操作控制</li><li>时间控制</li><li>数据处理</li></ol><h4 id="cpu的组成" tabindex="-1">CPU的组成 <a class="header-anchor" href="#cpu的组成" aria-label="Permalink to &quot;CPU的组成&quot;">​</a></h4><p>主要由运算器、控制器、寄存器组和内部总线等部件组成。</p><ol><li><p>运算器：是由算术逻辑单元、累加寄存器、数据缓冲寄存器和状态条件寄存器等组成，它是数据加工处理部件，用于完成计算机的各种算术和逻辑运算。</p><p>主要功能：（1）执行所有算术运算，（2）执行所有逻辑运算</p><p>各组成部件：</p><ol><li>算术逻辑单元（ALU）</li><li>累加寄存器（AC）</li><li>数据缓冲寄存器（DR）</li><li>状态条件寄存器（PSW）</li></ol></li><li><p>控制器：控制整个CPU的工作，决定了计算机运行过程的自动化。它不仅要保证程序正确执行，而且要能够处理异常事件。控制器一般包括指令控制逻辑、时序控制逻辑、总线控制逻辑和中断控制逻辑。</p><ol><li>指令控制逻辑要完成取指令、分析指令和执行指令 <ol><li>指令寄存器（IR）</li><li>程序计数器（PC）</li><li>地址寄存器（AR）</li><li>指令译码器（ID）</li></ol></li><li>时序控制逻辑是为每条指令按时间顺序提供应有的控制信号。</li></ol></li><li><p>寄存器组：分为专用寄存器和通用寄存器。运算器和控制器中的寄存器是专用寄存器，其作用是固定的。通用寄存器用途广泛</p></li></ol><h4 id="多核cpu" tabindex="-1">多核CPU <a class="header-anchor" href="#多核cpu" aria-label="Permalink to &quot;多核CPU&quot;">​</a></h4><p>各种CPU核心具有固定的逻辑结构，一级缓存、二级缓存、执行单元、指令级单元和总线接口等逻辑单元都会有合理的布局。</p><h3 id="数据表示" tabindex="-1">数据表示 <a class="header-anchor" href="#数据表示" aria-label="Permalink to &quot;数据表示&quot;">​</a></h3><p>各种数值在计算机中表示的形式称为机器数，其特点是采用二进制计数制、数的符号用0或1表示，小数点隐含，表示不占位。机器数对应的实际数值称为数的真值。</p><p>无符号数：无符号数表示正数、在机器数中没有符号位。</p><p>带符号数：机器数的最高位表示正、负的符号位，其余位则表示数值。</p><p>带符号的机器数可采用原码、反码和补码等不同编码方法，机器数的这些编码方法称为码制。</p><ol><li>原码：机器码字长等于原码位数，正数最高位为0，负数为1，小数点不占位。数值0的原码最高位可以为1，也可以为0。</li><li>反码：正数的反码与原码一致，负数的反码则是其绝对值按位求反。</li><li>补码：正数的补码与其原码和反码相同，负数的补码则等于其反码的末位加1。正负0的补码的符号位都为0。</li><li>移码：机器数的字长为n，规定偏移量为2的n-1次方，只要将补码的符号位取反便可获得相应的译码表示。</li></ol><p>定点数：</p><ol><li>定点整数</li><li>定点小数</li></ol><p>符号数：用阶码和尾数表示的数为浮点数，阶码为带符号的纯整数，尾数为带符号的纯小数。</p><h3 id="校验码" tabindex="-1">校验码 <a class="header-anchor" href="#校验码" aria-label="Permalink to &quot;校验码&quot;">​</a></h3><p>奇偶校验码</p><p>海明码</p><p>循环冗余校验码</p><h2 id="计算机体系结构" tabindex="-1">计算机体系结构 <a class="header-anchor" href="#计算机体系结构" aria-label="Permalink to &quot;计算机体系结构&quot;">​</a></h2><h3 id="计算机体系结构的发展" tabindex="-1">计算机体系结构的发展 <a class="header-anchor" href="#计算机体系结构的发展" aria-label="Permalink to &quot;计算机体系结构的发展&quot;">​</a></h3><h4 id="计算机体系结构概述" tabindex="-1">计算机体系结构概述 <a class="header-anchor" href="#计算机体系结构概述" aria-label="Permalink to &quot;计算机体系结构概述&quot;">​</a></h4><ol><li>计算机体系结构：是指计算机的概念性结构和功能属性。</li><li>计算机组织：是指计算机体系结构的逻辑实现，包括机器内的数据流和控制流的组成以及逻辑设计等。</li><li>计算机实现：是指计算机组织的物理实现。</li></ol><h4 id="计算机体系结构分类" tabindex="-1">计算机体系结构分类 <a class="header-anchor" href="#计算机体系结构分类" aria-label="Permalink to &quot;计算机体系结构分类&quot;">​</a></h4><ol><li>单处理系统</li><li>并行处理与多处理系统</li><li>分布式处理系统</li></ol><h4 id="指令系统" tabindex="-1">指令系统 <a class="header-anchor" href="#指令系统" aria-label="Permalink to &quot;指令系统&quot;">​</a></h4><ol><li>指令集体系统结构的分类</li></ol><h3 id="计算机存储系统" tabindex="-1">计算机存储系统 <a class="header-anchor" href="#计算机存储系统" aria-label="Permalink to &quot;计算机存储系统&quot;">​</a></h3><h4 id="存储器的层次结构" tabindex="-1">存储器的层次结构 <a class="header-anchor" href="#存储器的层次结构" aria-label="Permalink to &quot;存储器的层次结构&quot;">​</a></h4><p>计算机中包含多种存储器，CPU内部的通用寄存器组，CPU内的Cache（高速缓存）、CPU外部的Cache、主板上的主存储器、主板外的磁盘存储器</p><h4 id="存储器的分类" tabindex="-1">存储器的分类 <a class="header-anchor" href="#存储器的分类" aria-label="Permalink to &quot;存储器的分类&quot;">​</a></h4><p>位置：内存和外存</p><p>材料：磁存储器、半导体存储器、光存储器</p><p>工作方式：读写存储器、只读存储器、固定只读存储器、可编程的只读存储器、可擦出可编程的只读存储器、电擦除可编程的只读存储器、闪存存储器</p><p>访问方式：按地址访问、按内容访问</p><p>按寻址方式：随机存储器、顺序存储器、直接存储器</p><h4 id="相联存储器" tabindex="-1">相联存储器 <a class="header-anchor" href="#相联存储器" aria-label="Permalink to &quot;相联存储器&quot;">​</a></h4><p>是一种按内容访问的存储器，工作原理是把数据或者数据的某部分作为关键字，按顺序写入信息，读出时并行地将关键字与存储器中的每一个单元进行比较，找出存储器中所有关键字相同的数据字，特别适合于信息的检索和更新。</p><h4 id="高速缓存" tabindex="-1">高速缓存 <a class="header-anchor" href="#高速缓存" aria-label="Permalink to &quot;高速缓存&quot;">​</a></h4><p>高速缓存用来存放当前最活跃的的程序和数据。位于CPU与主存之间：容量一般在几千字节到几兆字节之间；速度一般比主存快5～10倍，由快速半导体存储器构成；内容是主存局部区域的副本，对程序员来说是透明的。</p><h4 id="虚拟存储器" tabindex="-1">虚拟存储器 <a class="header-anchor" href="#虚拟存储器" aria-label="Permalink to &quot;虚拟存储器&quot;">​</a></h4><p>在概念上，将主存看作是一个由若干字节组成的存储空间，每个字节有一个地址编号，主存单元的该地址称为物理地址，当要访问主存是，CPU给出访问数据所在的存储单元地址，然后由主存的读写控制部件定位对应的存储单元，对其进行读写操作。</p><h4 id="外存储器" tabindex="-1">外存储器 <a class="header-anchor" href="#外存储器" aria-label="Permalink to &quot;外存储器&quot;">​</a></h4><p>CPU不能直接访问外存中的程序和数据，只有将其以文件为单位调入主存才可访问。主要有磁表面存储器、光盘存储器及固态硬盘</p><h4 id="磁盘阵列技术" tabindex="-1">磁盘阵列技术 <a class="header-anchor" href="#磁盘阵列技术" aria-label="Permalink to &quot;磁盘阵列技术&quot;">​</a></h4><p>是有多台磁盘存储器组成一个快速、大容量、高可靠的外部子系统。</p><h4 id="存储域网络" tabindex="-1">存储域网络 <a class="header-anchor" href="#存储域网络" aria-label="Permalink to &quot;存储域网络&quot;">​</a></h4><p>大型服务器系统背后都有一个网络，把一个或多个服务器与多个存储设备连接起来，每个存储设备可以是RAID、磁带备份系统、磁带库和CD- ROM库等，构成存储域网络。</p><h3 id="输入-输出技术" tabindex="-1">输入/输出技术 <a class="header-anchor" href="#输入-输出技术" aria-label="Permalink to &quot;输入/输出技术&quot;">​</a></h3><h4 id="微型计算机中最常用的内存与接口的编址方法" tabindex="-1">微型计算机中最常用的内存与接口的编址方法 <a class="header-anchor" href="#微型计算机中最常用的内存与接口的编址方法" aria-label="Permalink to &quot;微型计算机中最常用的内存与接口的编址方法&quot;">​</a></h4><p>常见两种：内存与接口地址独立编址和内存与接口地址统一编址。</p><ol><li>内存与接口地址独立编址方法：内存地址和接口地址是完全独立的两个地址空间。</li><li>内存与接口地址统一编址方法：统一在一个公共的地址空间里。</li></ol><h4 id="直接程序控制" tabindex="-1">直接程序控制 <a class="header-anchor" href="#直接程序控制" aria-label="Permalink to &quot;直接程序控制&quot;">​</a></h4>',63),t=[o];function h(n,d,p,c,s,u){return e(),l("div",null,t)}const P=a(r,[["render",h]]);export{q as __pageData,P as default};
