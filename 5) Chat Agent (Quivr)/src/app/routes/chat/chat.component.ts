import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  @ViewChild('scroller') private myScrollContainer: ElementRef;
  chats: any[] = [];
  selectedChatId: string  = '';
  fetchHistory: boolean = false;
  editChatId: string = '';
  chatTitle: string = '';
  
  messages: any[] = [];
  chatMessage: string = '';

  constructor(private apiService: ApiService, 
    private changeDetector: ChangeDetectorRef,
    private toastr: ToastrService) {}

  ngOnInit() {
    this.fetchChatHistory();
  }

  createNewChat()
  {
    const metadata = {
      name: this.chatMessage
    };

    this.fetchHistory = true;
    this.apiService.createChat(metadata).subscribe((response:any) => {
      this.chats.unshift(response);
      this.selectedChatId = response.chat_id;
    }).add(()=>{
      this.fetchHistory = false;
      this.createNewMessage();
    });
  }

  fetchChatHistory()
  {
    this.fetchHistory = true;
    this.apiService.getChats().subscribe((c:any) => {
      this.chats = c.chats;
      this.chats.sort((a, b) => {
        const dateA: any = new Date(a.creation_time);
        const dateB: any = new Date(b.creation_time);
        return dateB - dateA;
      });
    }).add(()=>{
      this.fetchHistory = false;
    });
  }

  updateChatTitle(chat: any)
  {
    this.editChatId = chat.chat_id;
    this.chatTitle = chat.chat_name;
  }

  onUpdateChatTitle(isCancel: boolean, chat?: any)
  {
    if(isCancel || this.chatTitle === chat.chat_name)
    {
      this.editChatId = '';
      return;
    }

    if(this.chatTitle.trim()==='')
    {
      this.toastr.warning('Empty field not allowed', "Alert");
      return;
    }

    const metadata = {
      chat_name: this.chatTitle
    };

    this.fetchHistory = true;
    this.apiService.updateChatTitle(chat.chat_id, metadata).subscribe((response:any) => {
      chat.chat_name = response.chat_name;
    }).add(()=>{
      this.fetchHistory = false;
      this.editChatId = '';
    });
  }

  deleteChatHistory(chatId: string)
  {
    if (confirm('Are you sure you want to delete history?')) {
      this.fetchHistory = true;
      this.apiService.deleteChatHistory(chatId).subscribe((res:any)=>{
        this.chats = this.chats.filter(obj => obj.chat_id !== chatId);
        if(this.selectedChatId === chatId)
        {
          this.startNewChat();
        }
        this.toastr.success('History deleted successfully!', "Success");
      }).add(()=>{
        this.fetchHistory = false;
      })
    } 
  }

  sendMessage()
  {
    if(this.chatMessage.trim()==='')
    {
      this.toastr.warning('Empty field not allowed', 'Alert');
      return;
    }

    if(this.selectedChatId === '')
    {
      this.createNewChat();
    }
    else
    {
      this.createNewMessage();
    }

  }

  createNewMessage()
  {
    const metadata = {
      question: this.chatMessage,
      model: "gpt-3.5-turbo",
      temperature: 0.1,
      max_tokens: 700,
      brain_id: environment.brain_id
    };

    this.fetchHistory = true;
    this.apiService.createMessage(this.selectedChatId, metadata).subscribe((response:any) => {
      const msg = {
        item_type: "MESSAGE",
        body: response
      }
      this.messages.push(msg);
    }).add(()=>{
      this.fetchHistory = false;
      this.chatMessage = '';
      this.scrollToBottom();
    });
  }

  startNewChat()
  {
    this.selectedChatId = '';
    this.messages = [];
  }

  fetchChatMessage(chatId: string)
  {
    this.fetchHistory = true;
    this.apiService.getChatHistory(chatId).subscribe((h:any) => {
      this.messages = h;
    }).add(()=>{
      this.selectedChatId = chatId;
      this.fetchHistory = false;
      this.scrollToBottom();
    });
  }

  scrollToBottom(): void {
    setTimeout(() => {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    }, 0);

    this.changeDetector.detectChanges();
  }
  
}