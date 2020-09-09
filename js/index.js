$(function() {
    (function() {
        $('.monitor .tabs a').on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
            $(".monitor .content").eq($(this).index()).show().siblings(".content").hide();
        });
    })();

    (function() {
        $(".marquee-view .marquee").each(function() {
            // console.log($(this));
            var rows = $(this).children().clone();
            $(this).append(rows);
        });
    })();

    (function() {
        var myChart = echarts.init(document.querySelector('.point').querySelector('.pie'));

        var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a}<br>{b} : {c} ({d}%)'
            },
            color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
            series: [{
                name: '点位统计',
                type: 'pie',
                radius: ['10%', '70%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }
                ],
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 6,
                    length2: 8
                }
            }]
        };

        myChart.setOption(option);
        window.addEventListener('resize', function() {
            myChart.resize();
        })
    })();
    // 全国用户总量
    (function() {
        var myChart = echarts.init(document.querySelector('.users').querySelector('.bar'));
        var item = {
            name: '',
            value: 1200,
            // 柱子颜色
            itemStyle: {
                color: '#254065'
            },
            // 鼠标经过柱子颜色
            emphasis: {
                itemStyle: {
                    color: '#254065'
                }
            },
            // 工具提示隐藏
            tooltip: {
                extraCssText: 'opacity:0'
            },
        };
        var option = {
            color: new echarts.graphic.LinearGradient(
                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                0, 0, 0, 1, [
                    { offset: 0, color: '#00fffb' }, // 0 起始颜色
                    { offset: 1, color: '#0061ce' } // 1 结束颜色
                ]
            ),
            tooltip: {
                trigger: 'item',
            },
            grid: {
                top: '3%',
                right: '3%',
                bottom: '3%',
                left: '0%',
                containLabel: true,
                // 是否显示直角坐标系网格
                show: true,
                //grid 四条边框的颜色
                borderColor: 'rgba(0, 240, 255, 0.3)'
            },
            xAxis: [{
                axisLabel: {
                    color: '#4c9bfd',
                    fontSize: 10
                },
                type: 'category',
                data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                axisTick: {
                    alignWithLabel: false,
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)',
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    color: '#4c9bfd',
                    fontSize: 10
                },
                axisTick: {
                    alignWithLabel: true,
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)',
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                }
            }],
            series: [{
                name: '用户总量',
                type: 'bar',
                barWidth: '60%',
                data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
            }]
        };

        myChart.setOption(option);
        window.addEventListener('resize', function() {
            myChart.resize();
        })
    })();
    // 订单模块
    (function() {
        $('.order .filter a').on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
            index = $(this).index();
            // console.log($(this).index());
            if ($(this).index() == 0) {
                $(this).parents('.order').find('h4').eq(0).html('20,301,987');
                $(this).parents('.order').find('h4').eq(1).html('99834');
            } else if ($(this).index() == 1) {
                $(this).parents('.order').find('h4').eq(0).html('301,987');
                $(this).parents('.order').find('h4').eq(1).html('9834');
            } else if ($(this).index() == 2) {
                $(this).parents('.order').find('h4').eq(0).html('1987');
                $(this).parents('.order').find('h4').eq(1).html('3834');
            } else {
                $(this).parents('.order').find('h4').eq(0).html('987');
                $(this).parents('.order').find('h4').eq(1).html('834');
            }
        });
        var as = $(".order .filter a");
        var index = 0;
        var timer = setInterval(function() {
            index++;
            if (index >= 4) index = 0;
            as.eq(index).click();
        }, 1000);
        // 鼠标经过sales，关闭定时器，离开开启定时器
        $(".order").hover(
            function() {
                clearInterval(timer);
            },
            function() {
                clearInterval(timer);
                timer = setInterval(function() {
                    index++;
                    if (index >= 4) index = 0;
                    as.eq(index).click();
                }, 1000);
            }
        );
    })();
    // 销售额模块
    (function() {
        var myChart = echarts.init(document.querySelector('.sales').querySelector('.line'));
        var dataDate = {
            year: [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ],
            quarter: [
                [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
                [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
            ],
            month: [
                [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
                [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
            ],
            week: [
                [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
                [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
            ]
        }
        var option = {
            color: ['#00f2f1', '#ed3f35'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['预期销售额', '实际销售额'],
                textStyle: {
                    color: '#4c9bfd' // 图例文字颜色
                },
                right: '10%' // 距离右边10%
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: '20%',
                containLabel: true,
                // 是否显示直角坐标系网格
                show: true,
                //grid 四条边框的颜色
                borderColor: '#012f4a'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisLabel: {
                    color: '#4c9bfd',
                    fontSize: 10
                },
                axisTick: {
                    alignWithLabel: false,
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#012f4a',
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    color: '#4c9bfd',
                    fontSize: 10
                },
                axisTick: {
                    alignWithLabel: true,
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#012f4a',
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#012f4a'
                    }
                }
            },
            series: [{
                    name: '预期销售额',
                    type: 'line',
                    stack: '总量1',
                    data: dataDate.year[0],
                    smooth: true
                },
                {
                    name: '实际销售额',
                    type: 'line',
                    stack: '总量2',
                    data: dataDate.year[1],
                    smooth: true
                }
            ]
        };
        $('.sales a').on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
            // console.log($(this).index());
            index = $(this).index() - 1;
            if ($(this).index() == 1) {
                option.series[0].data = dataDate.year[0];
                option.series[1].data = dataDate.year[1]
            } else if ($(this).index() == 2) {
                option.series[0].data = dataDate.quarter[0];
                option.series[1].data = dataDate.quarter[1]
            } else if ($(this).index() == 3) {
                option.series[0].data = dataDate.month[0];
                option.series[1].data = dataDate.month[1]
            } else {
                option.series[0].data = dataDate.week[0];
                option.series[1].data = dataDate.week[1]
            }
            myChart.setOption(option);
        });
        var as = $(".sales a");
        var index = 0;
        var timer = setInterval(function() {
            index++;
            if (index >= 4) index = 0;
            as.eq(index).click();
        }, 1000);
        // 鼠标经过sales，关闭定时器，离开开启定时器
        $(".sales").hover(
            function() {
                clearInterval(timer);
            },
            function() {
                clearInterval(timer);
                timer = setInterval(function() {
                    index++;
                    if (index >= 4) index = 0;
                    as.eq(index).click();
                }, 1000);
            }
        );
        myChart.setOption(option);


        window.addEventListener('resize', function() {
            myChart.resize();
        })
    })();
    // 渠道分布
    (function() {
        var myChart = echarts.init(document.querySelector(".radar"));
        // 2.指定配置
        var dataBJ = [
            [90, 19, 56, 11, 34]
        ];
        var lineStyle = {
            normal: {
                width: 1,
                opacity: 0.5,
                color: '#fff'
            }
        };

        var option = {
            tooltip: {
                show: true,
                // 控制提示框组件的显示位置
                position: ['60%', '10%'],
                // padding: 0,
                textStyle: {
                    fontSize: 10
                }
            },
            radar: {
                // 最外边圆圈的大小
                radius: '65%',
                indicator: [
                    { name: '机场', max: 100 },
                    { name: '商场', max: 100 },
                    { name: '火车站', max: 100 },
                    { name: '汽车站', max: 100 },
                    { name: '地铁', max: 100 }
                ],
                shape: 'circle',
                // 分割的圆圈个数
                splitNumber: 4,
                // 文字颜色
                name: {
                    textStyle: {
                        color: '#4c9bfd',
                        fontSize: 12
                    }
                },
                // 每个圆圈的线
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                },
                splitArea: {
                    show: false
                },
                // 坐标轴的线
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                }
            },
            series: [{
                name: '北京',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataBJ,
                // 图形拐点
                symbol: 'circle',
                // 拐点的大小  
                symbolSize: 5,
                // 小圆点（拐点）设置为白色
                itemStyle: {
                    color: '#fff'
                },
                // 在圆点上显示相关数据
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: 10
                },
                areaStyle: {
                    color: 'rgba(238, 197, 102, 0.6)',
                    opacity: 1
                }
            }]
        };
        // 3.把配置和数据给对象
        myChart.setOption(option);
        window.addEventListener('resize', function() {
            myChart.resize();
        })
    })();
    // 季度进度
    (function() {
        var myChart = echarts.init(document.querySelector(".gauge"));
        // 2.指定配置
        var option = {
            series: [{
                startAngle: 180,
                name: '销售进度',
                type: 'pie',
                radius: ['150%', '170%'],
                center: ['48%', '90%'],
                label: {
                    show: false,
                },
                labelLine: {
                    show: false
                },
                hoverOffset: 0,
                data: [{
                        value: 150,
                        name: '直接访问',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                                0,
                                0,
                                0,
                                1, [
                                    { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                                    { offset: 1, color: "#005fc1" } // 1 结束颜色
                                ]
                            )
                        }
                    },
                    {
                        value: 50,
                        name: '邮件营销',
                        itemStyle: {
                            color: '#12274d'
                        }
                    },
                    {
                        value: 200,
                        name: '联盟广告',
                        itemStyle: {
                            color: 'transparent'
                        }
                    },
                ]
            }]
        };
        // 3.把配置和数据给对象
        myChart.setOption(option);
        window.addEventListener('resize', function() {
            myChart.resize();
        })
    })();
    // 全国热榜
    (function() {
        var hotData = [{
                city: '北京', // 城市
                sales: '25, 179', // 销售额
                flag: true, //  上升还是下降
                brands: [ //  品牌种类数据
                    { name: '可爱多', num: '9,086', flag: true },
                    { name: '娃哈哈', num: '8,341', flag: true },
                    { name: '喜之郎', num: '7,407', flag: false },
                    { name: '八喜', num: '6,080', flag: false },
                    { name: '小洋人', num: '6,724', flag: false },
                    { name: '好多鱼', num: '2,170', flag: true },
                ]
            },
            {
                city: '河北',
                sales: '23,252',
                flag: false,
                brands: [
                    { name: '可爱多', num: '3,457', flag: false },
                    { name: '娃哈哈', num: '2,124', flag: true },
                    { name: '喜之郎', num: '8,907', flag: false },
                    { name: '八喜', num: '6,080', flag: true },
                    { name: '小洋人', num: '1,724', flag: false },
                    { name: '好多鱼', num: '1,170', flag: false },
                ]
            },
            {
                city: '上海',
                sales: '20,760',
                flag: true,
                brands: [
                    { name: '可爱多', num: '2,345', flag: true },
                    { name: '娃哈哈', num: '7,109', flag: true },
                    { name: '喜之郎', num: '3,701', flag: false },
                    { name: '八喜', num: '6,080', flag: false },
                    { name: '小洋人', num: '2,724', flag: false },
                    { name: '好多鱼', num: '2,998', flag: true },
                ]
            },
            {
                city: '江苏',
                sales: '23,252',
                flag: false,
                brands: [
                    { name: '可爱多', num: '2,156', flag: false },
                    { name: '娃哈哈', num: '2,456', flag: true },
                    { name: '喜之郎', num: '9,737', flag: true },
                    { name: '八喜', num: '2,080', flag: true },
                    { name: '小洋人', num: '8,724', flag: true },
                    { name: '好多鱼', num: '1,770', flag: false },
                ]
            },
            {
                city: '山东',
                sales: '20,760',
                flag: true,
                brands: [
                    { name: '可爱多', num: '9,567', flag: true },
                    { name: '娃哈哈', num: '2,345', flag: false },
                    { name: '喜之郎', num: '9,037', flag: false },
                    { name: '八喜', num: '1,080', flag: true },
                    { name: '小洋人', num: '4,724', flag: false },
                    { name: '好多鱼', num: '9,999', flag: true },
                ]
            }
        ];
        var supHTML = '';
        $.each(hotData, function(index, item) {
            supHTML += `<li><span>${item.city}</span><span>${item.sales}<s class="${item.flag ? 'icon-up' : 'icon-down'}"></s></span></li>`;
        });
        $(".sup").html(supHTML);

        var as = $(".province .sup li");
        var index = 0;
        // 鼠标经过
        $('.province .sup').on('mouseenter', 'li', function() {
            index = $(this).index();
            rander($(this));
        });
        as.eq(0).mouseenter();

        var timer = setInterval(function() {
            index++;
            if (index >= 5) index = 0;
            rander(as.eq(index));
        }, 1000);

        // 鼠标经过，关闭定时器，离开开启定时器
        $(".province .sup").hover(
            function() {
                clearInterval(timer);
            },
            function() {
                clearInterval(timer);
                timer = setInterval(function() {
                    index++;
                    if (index >= 5) index = 0;
                    rander(as.eq(index));
                }, 1000);
            }
        );

        function rander(that) {
            that.addClass('active').siblings('li').removeClass('active');
            var subHTML = '';
            $.each(hotData[that.index()].brands, function(i, ele) {
                subHTML += `<li><span>${ele.name}</span><span>${ele.num}<s class="${ele.flag ? 'icon-up' : 'icon-down'}"></s></span></li>`
            });
            $('.sub').html(subHTML);
        }
    })()
})