
















s1.initVideo("/Users/nyuad/Desktop/LiveCoding/capypy.mov")
src(s1).repeat(()=>ccActual[0],()=>ccActual[0]).out(o0) //capy video

s2.initImage("/Users/nyuad/Desktop/LiveCoding/capys.jpeg")
src(s2).scale(1,()=>1-ccActual[1]).out(o1)
render(o1)

hush()


//src(o0).blend(o1,1).out(o1)
