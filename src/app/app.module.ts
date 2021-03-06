import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BotComponent } from './components/bot/bot.component';
import { HttpServiceService } from 'src/services/http.service';
import { BotInteractionService } from 'src/services/bot-interaction.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, SettingsComponent, BotComponent],
  providers: [HttpServiceService, BotInteractionService],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
