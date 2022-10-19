import { Component, OnInit, Input, ChangeDetectorRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  urlList = ['/agent-loggedoff.wav', '/agent-incorrect.wav', '/phonetic/c_p.wav', '/phonetic/k_p.wav', '/phonetic/t_p.wav', '/phonetic/y_p.wav', '/phonetic/u_p.wav', '/phonetic/a_p.wav', '/phonetic/m_p.wav', '/phonetic/9_p.wav', '/phonetic/s_p.wav', '/phonetic/g_p.wav', '/phonetic/d_p.wav', '/phonetic/h_p.wav', '/phonetic/f_p.wav', '/phonetic/e_p.wav', '/phonetic/x_p.wav', '/phonetic/j_p.wav', '/phonetic/q_p.wav', '/phonetic/b_p.wav', '/phonetic/p_p.wav', '/phonetic/z_p.wav', '/phonetic/w_p.wav', '/phonetic/n_p.wav', '/phonetic/r_p.wav', '/phonetic/v_p.wav', '/phonetic/l_p.wav', '/phonetic/i_p.wav', '/phonetic/o_p.wav', '/agent-alreadyon.wav', '/agent-loginok.wav', '/ascending-2tone.wav', '/beeperr.wav', '/agent-user.wav', '/digits/h-20.wav', '/digits/day-6.wav', '/digits/50.wav', '/digits/mon-3.wav', '/digits/h-19.wav', '/digits/h-9.wav', '/digits/h-2.wav', '/digits/day-0.wav', '/digits/h-60.wav', '/digits/h-14.wav', '/digits/40.wav', '/digits/dollars.wav', '/digits/10.wav', '/digits/18.wav', '/digits/h-12.wav', '/digits/mon-9.wav', '/digits/day-2.wav', '/digits/mon-8.wav', '/digits/11.wav', '/digits/today.wav', '/digits/mon-6.wav', '/digits/day-1.wav', '/digits/3.wav', '/digits/billion.wav', '/digits/h-16.wav', '/digits/7.wav', '/digits/h-7.wav', '/digits/h-1.wav', '/digits/at.wav', '/digits/million.wav', '/digits/8.wav', '/digits/h-18.wav', '/digits/mon-2.wav', '/digits/4.wav', '/digits/5.wav', '/digits/h-13.wav', '/digits/h-3.wav', '/digits/12.wav', '/digits/mon-7.wav', '/digits/30.wav', '/digits/mon-11.wav', '/digits/thousand.wav', '/digits/90.wav', '/digits/1.wav', '/digits/15.wav', '/digits/day-5.wav', '/digits/h-80.wav', '/digits/60.wav', '/digits/80.wav', '/digits/mon-10.wav', '/digits/day-3.wav', '/digits/h-million.wav', '/digits/h-hundred.wav', '/digits/0.wav', '/digits/70.wav', '/digits/19.wav', '/digits/h-40.wav', '/digits/h-50.wav', '/digits/h-15.wav', '/digits/2.wav', '/digits/minus.wav', '/digits/a-m.wav', '/digits/mon-5.wav', '/digits/h-17.wav', '/digits/day-4.wav', '/digits/6.wav', '/digits/mon-4.wav', '/digits/14.wav', '/digits/oh.wav', '/digits/16.wav', '/digits/h-4.wav', '/digits/hundred.wav', '/digits/yesterday.wav', '/digits/h-10.wav', '/digits/star.wav', '/digits/13.wav', '/digits/h-6.wav', '/digits/pound.wav', '/digits/h-5.wav', '/digits/oclock.wav', '/digits/h-70.wav', '/digits/h-8.wav', '/digits/h-30.wav', '/digits/17.wav', '/digits/mon-0.wav', '/digits/h-11.wav', '/digits/p-m.wav', '/digits/h-thousand.wav', '/digits/h-billion.wav', '/digits/h-90.wav', '/digits/mon-1.wav', '/digits/9.wav', '/digits/20.wav', '/digits/tomorrow.wav', '/silence/10.wav', '/silence/3.wav', '/silence/7.wav', '/silence/8.wav', '/silence/4.wav', '/silence/5.wav', '/silence/1.wav', '/silence/2.wav', '/silence/6.wav', '/silence/9.wav', '/agent-newlocation.wav', '/auth-thankyou.wav', '/letters/ascii36.wav', '/letters/i.wav', '/letters/q.wav', '/letters/zed.wav', '/letters/slash.wav', '/letters/ascii123.wav', '/letters/l.wav', '/letters/c.wav', '/letters/f.wav', '/letters/ascii59.wav', '/letters/ascii63.wav', '/letters/j.wav', '/letters/x.wav', '/letters/p.wav', '/letters/a.wav', '/letters/ascii44.wav', '/letters/at.wav', '/letters/s.wav', '/letters/ascii41.wav', '/letters/dash.wav', '/letters/ascii94.wav', '/letters/ascii96.wav', '/letters/y.wav', '/letters/ascii40.wav', '/letters/ascii62.wav', '/letters/h.wav', '/letters/equals.wav', '/letters/n.wav', '/letters/ascii124.wav', '/letters/ascii42.wav', '/letters/ascii92.wav', '/letters/space.wav', '/letters/u.wav', '/letters/ascii58.wav', '/letters/ascii95.wav', '/letters/ascii60.wav', '/letters/o.wav', '/letters/e.wav', '/letters/ascii34.wav', '/letters/b.wav', '/letters/ascii37.wav', '/letters/exclaimation-point.wav', '/letters/dollar.wav', '/letters/ascii39.wav', '/letters/v.wav', '/letters/z.wav', '/letters/g.wav', '/letters/r.wav', '/letters/ascii93.wav', '/letters/d.wav', '/letters/ascii126.wav', '/letters/asterisk.wav', '/letters/ascii125.wav', '/letters/t.wav', '/letters/dot.wav', '/letters/plus.wav', '/letters/ascii91.wav', '/letters/w.wav', '/letters/k.wav', '/letters/ascii38.wav', '/letters/m.wav', '/agent-pass.wav', '/auth-incorrect.wav', '/beep.wav', '/followme/call-from.wav', '/followme/no-recording.wav', '/followme/pls-hold-while-try.wav', '/followme/options.wav', '/followme/sorry.wav', '/followme/status.wav'];

  @Input() item: any;

  id = Date.now();

  settingActive = false;

  model = {
    mediaResource: '',
    mediaResourceType: 'project',
    loop: null
  };

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.item.model = this.getModel.bind(this);
  }

  getModel() {
    const model = { ...this.model };
    if (!this.settingActive) {
      delete model.loop;
    }
    return model;
  }

}
